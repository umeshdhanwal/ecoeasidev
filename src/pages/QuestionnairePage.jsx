import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Button, Heading, Input } from "../components";
import TextArea from "../components/TextArea"; // Add this line
import Header from "../components/Header";
import ProgressOverviewSection from "../components/ProgressOverviewSection";
import GenderBreakdownBar from '../components/GenderBreakdownBar';  // Add this import at the top of the file
import { useNavigate } from 'react-router-dom';
import QuestionnaireStepper from "../components/QuestionnaireStepper";
import ResultsSection from "../components/ResultsSection";
import TaraAIAssistant from "../components/TaraAIAssistant";

const QuestionnairePage = () => {
  const [question, setQuestion] = useState(null);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [answer, setAnswer] = useState([]);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [classifications, setClassifications] = useState({
    General: { total: 0, answered: 0, items: [] },
    Environmental: { total: 0, answered: 0, items: [] },
    Social: { total: 0, answered: 0, items: [] },
    Governance: { total: 0, answered: 0, items: [] }
  });
  const [isSurveyComplete, setIsSurveyComplete] = useState(false);
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const fetchTotalQuestions = async () => {
    try {
      let currentQuestion = 1;
      let totalQuestions = 0;

      while (true) {
        const response = await fetch("https://g84c60a1e52e6e4-ora23aidb.adb.eu-paris-1.oraclecloudapps.com/ords/api/ee_do_service/this_action", {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            procedure: "GET_QUESTION",
            user_id: 10006,
            survey_id: "VSME_1",
            payload: {
              question_number: currentQuestion
            }
          })
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        let rawText = await response.text();
        console.log(`Raw API Response for question ${currentQuestion}:`, rawText);

        const systemResponseMatch = rawText.match(/"system_response":\s*"([^"]+)"/);
        if (systemResponseMatch && systemResponseMatch[1].includes("SUCCESS")) {
          totalQuestions++;
          currentQuestion++;
        } else {
          break; // No more questions found
        }
      }

      console.log("Total number of questions:", totalQuestions);
      setTotalQuestions(totalQuestions);
    } catch (error) {
      console.error("Error fetching total questions:", error);
    }
  };

  const fetchQuestionsClassification = async () => {
    try {
      let currentQuestion = 1;
      const tempClassifications = {
        GENERAL: { total: 0, answered: 0, items: [] },
        ENVIRONMENTAL: { total: 0, answered: 0, items: [] },
        SOCIAL: { total: 0, answered: 0, items: [] },
        GOVERNANCE: { total: 0, answered: 0, items: [] }
      };

      while (true) {
        console.log(`Fetching question ${currentQuestion}`);
        const response = await fetch("https://g84c60a1e52e6e4-ora23aidb.adb.eu-paris-1.oraclecloudapps.com/ords/api/ee_do_service/this_action", {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            procedure: "GET_QUESTION",
            user_id: 10006,
            survey_id: "VSME_1",
            payload: {
              question_number: currentQuestion
            }
          })
        });

        if (!response.ok) {
          console.log(`Response not OK for question ${currentQuestion}`);
          break;
        }

        const rawText = await response.text();
        console.log(`Raw response for question ${currentQuestion}:`, rawText);

        // Use regex to extract the needed data
        const classificationMatch = rawText.match(/"question_classification":\s*"([^"]+)"/);
        const questionTextMatch = rawText.match(/"question_text":\s*"([^"]+)"/);
        const systemResponseMatch = rawText.match(/"system_response":\s*"([^"]+)"/);

        if (systemResponseMatch && systemResponseMatch[1].includes("SUCCESS") && 
            classificationMatch && questionTextMatch) {
          const classification = classificationMatch[1];
          const questionText = questionTextMatch[1];

          console.log(`Found classification for question ${currentQuestion}:`, classification);
          
          if (tempClassifications[classification]) {
            console.log(`Adding question ${currentQuestion} to ${classification}`);
            tempClassifications[classification].items.push({
              number: currentQuestion,
              text: questionText,
              answered: false
            });
            tempClassifications[classification].total++;
            console.log(`Updated ${classification} totals:`, tempClassifications[classification]);
          } else {
            console.warn(`Unknown classification found: ${classification}`);
          }
          currentQuestion++;
        } else {
          console.log(`No question data found for question ${currentQuestion}`);
          break;
        }
      }

      console.log('Final classifications state:', tempClassifications);
      
      // Convert to display format
      const displayClassifications = {
        General: tempClassifications.GENERAL,
        Environmental: tempClassifications.ENVIRONMENTAL,
        Social: tempClassifications.SOCIAL,
        Governance: tempClassifications.GOVERNANCE
      };
      
      console.log('Display classifications:', displayClassifications);
      setClassifications(displayClassifications);
    } catch (error) {
      console.error("Error in fetchQuestionsClassification:", error);
    }
  };

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      fetchTotalQuestions(),
      fetchQuestionsClassification()
    ]).finally(() => setIsLoading(false));
  }, []);

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        console.log("Fetching question number:", questionNumber);
        const response = await fetch("https://g84c60a1e52e6e4-ora23aidb.adb.eu-paris-1.oraclecloudapps.com/ords/api/ee_do_service/this_action", {
          method: 'POST',
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            procedure: "GET_QUESTION",
            user_id: 10006,
            survey_id: "VSME_1",
            payload: {
              question_number: questionNumber
            }
          })
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        let rawText = await response.text();
        console.log("Raw API Response:", rawText);

        // Extract question data using regex
        const questionNumberMatch = rawText.match(/"question_number":\s*(\d+)/);
        const questionTextMatch = rawText.match(/"question_text":\s*"([^"]+)"/);
        const answerTypeMatch = rawText.match(/"answer_type":\s*"([^"]+)"/);
        const optionsMatch = rawText.match(/"options":\s*(\[.*?\])/);

        if (questionNumberMatch && questionTextMatch && answerTypeMatch) {
          let answerOptions = [];
          if (optionsMatch) {
            try {
              answerOptions = JSON.parse(optionsMatch[1]);
            } catch (e) {
              console.error("Error parsing answer options:", e);
            }
          }

          const extractedQuestion = {
            questionNumber: parseInt(questionNumberMatch[1]),
            questionText: questionTextMatch[1],
            answerType: answerTypeMatch ? answerTypeMatch[1] : "Unknown",
            answerOptions: {
              answer_type: answerTypeMatch ? answerTypeMatch[1] : "Unknown",
              options: answerOptions
            }
          };

          console.log("Extracted Question Data:", extractedQuestion);
          setQuestion(extractedQuestion);
          setQuestionNumber(extractedQuestion.questionNumber);
          setAnswer(""); // Reset answer when new question is loaded
        } else {
          console.error("Failed to extract question data");
          setQuestion(null);
        }
      } catch (error) {
        console.error("Error fetching question:", error);
        setQuestion(null);
      }
    };

    fetchQuestion();
  }, [questionNumber]);

  useEffect(() => {
    // This effect will run whenever answeredQuestions or totalQuestions changes
    // You can perform any additional actions here if needed
  }, [answeredQuestions, totalQuestions]);

  useEffect(() => {
    console.log("Current question state:", question);
  }, [question]);

  useEffect(() => {
    console.log("Question state updated:", question);
  }, [question]);

  useEffect(() => {
    console.log("Question number updated:", questionNumber);
  }, [questionNumber]);

  useEffect(() => {
    console.log("Component state:", {
      question,
      questionNumber,
      answer,
      // Include any other relevant state variables
    });
  }, [question, questionNumber, answer]);

  const updateQuestionStatus = (questionNumber) => {
    setClassifications(prev => {
      const newClassifications = { ...prev };
      for (const category of Object.keys(newClassifications)) {
        const questionIndex = newClassifications[category].items.findIndex(
          item => item.number === questionNumber
        );
        if (questionIndex !== -1) {
          if (!newClassifications[category].items[questionIndex].answered) {
            newClassifications[category].items[questionIndex].answered = true;
            newClassifications[category].answered++;
          }
          break;
        }
      }
      return newClassifications;
    });
  };

  const handleNextQuestion = async () => {
    setIsButtonLoading(true); // Start loading
    console.log("Saving answer:", Array.isArray(answer) ? answer : [answer]);
    
    try {
      // Save the current answer first
      await saveAnswer(questionNumber, answer);

      // Try to fetch the next question
      const response = await fetch("https://g84c60a1e52e6e4-ora23aidb.adb.eu-paris-1.oraclecloudapps.com/ords/api/ee_do_service/this_action", {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          procedure: "GET_QUESTION",
          user_id: 10006,
          survey_id: "VSME_1",
          payload: {
            question_number: questionNumber + 1
          }
        })
      });

      const rawText = await response.text();
      const systemResponseMatch = rawText.match(/"system_response":\s*"([^"]+)"/);
      
      // If no more questions are available or error response
      if (!systemResponseMatch || !systemResponseMatch[1].includes("SUCCESS")) {
        setAnsweredQuestions(totalQuestions); // Ensure we're at 100%
        setIsSurveyComplete(true);
        return;
      }

      // Extract question data
      const questionNumberMatch = rawText.match(/"question_number":\s*(\d+)/);
      const questionTextMatch = rawText.match(/"question_text":\s*"([^"]+)"/);
      const answerTypeMatch = rawText.match(/"answer_type":\s*"([^"]+)"/);
      const optionsMatch = rawText.match(/"options":\s*(\[.*?\])/);

      if (!questionNumberMatch || !questionTextMatch || !answerTypeMatch) {
        console.log("Invalid question data, showing results");
        setIsSurveyComplete(true);
        return;
      }

      // Update question states
      const nextQuestionNumber = parseInt(questionNumberMatch[1]);
      setQuestionNumber(nextQuestionNumber);
      
      // Update progress
      if (nextQuestionNumber > answeredQuestions) {
        setAnsweredQuestions(nextQuestionNumber - 1);
      }

      // Reset answer for new question
      setAnswer([]);

      // Update the question object
      setQuestion({
        questionNumber: nextQuestionNumber,
        questionText: questionTextMatch[1],
        answerType: answerTypeMatch[1],
        answerOptions: {
          answer_type: answerTypeMatch[1],
          options: optionsMatch ? JSON.parse(optionsMatch[1]) : []
        }
      });

      // Update question status in classifications
      updateQuestionStatus(questionNumber, true);

    } catch (error) {
      console.error("Error handling next question:", error);
      setIsSurveyComplete(true);
    } finally {
      setIsButtonLoading(false); // Stop loading regardless of outcome
    }
  };

  // Helper function to save answers
  const saveAnswer = async (questionNum, answerData) => {
    try {
      const response = await fetch("https://g84c60a1e52e6e4-ora23aidb.adb.eu-paris-1.oraclecloudapps.com/ords/api/ee_do_service/this_action", {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          procedure: "SAVE_ANSWER",
          user_id: 10006,
          survey_id: "VSME_1",
          payload: {
            question_number: questionNum,
            answer: Array.isArray(answerData) ? answerData : [answerData]
          }
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.text();
      console.log("Answer saved successfully:", result);
    } catch (error) {
      console.error("Error saving answer:", error);
    }
  };

  const handleBackQuestion = () => {
    if (questionNumber > 1) {
      setQuestionNumber(prevNumber => prevNumber - 1);
      // Update answeredQuestions if we're moving back from the last answered question
      if (questionNumber === answeredQuestions) {
        setAnsweredQuestions(prevAnswered => prevAnswered - 1);
      }
    }
  };

  const renderAnswerInput = () => {
    if (!question) return null;

    switch (question.answerType) {
      case "FREE TEXT":
        return (
          <TextArea
            shape="round"
            name="Answer Textarea"
            placeholder="Write your answer here"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="self-stretch rounded-lg !border !border-gray-200 px-4 font-medium tracking-[0.07px] text-gray-600"
          />
        );
      case "DROP-DOWN":
      case "DROP DOWN":
        return (
          <select
            name="Answer Dropdown"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full rounded-lg border border-gray-200 px-3.5 py-2 text-gray-600 focus:border-blue-500 focus:outline-none"
          >
            <option value="">Select an option</option>
            {question.answerOptions && question.answerOptions.options && 
              question.answerOptions.options.map((option, index) => (
                <option key={index} value={option.answer_value}>
                  {option.answer_value}
                </option>
              ))
            }
          </select>
        );
      case "RADIO BUTTON":
        return (
          <div className="flex flex-col gap-2">
            {question.answerOptions && question.answerOptions.options && 
              question.answerOptions.options.map((option, index) => (
                <label key={index} className="flex items-center">
                  <input
                    type="radio"
                    name="Answer Radio"
                    value={option.answer_value}
                    checked={answer === option.answer_value}
                    onChange={(e) => setAnswer(e.target.value)}
                    className="mr-2"
                  />
                  {option.answer_value}
                </label>
              ))
            }
          </div>
        );
      case "100% TABLE":
        return (
          <GenderBreakdownBar 
            onChange={(breakdown) => {
              setAnswer(JSON.stringify(breakdown));
            }}
          />
        );
      case "MULTI-CHOICE":
        return (
          <select
            multiple
            name="Answer Multi-Select"
            value={Array.isArray(answer) ? answer : []}
            onChange={(e) => {
              const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
              setAnswer(selectedOptions);
            }}
            className="w-full rounded-lg border border-gray-200 px-3.5 py-2 text-gray-600 focus:border-blue-500 focus:outline-none"
          >
            {question.answerOptions && question.answerOptions.options && 
              question.answerOptions.options.map((option, index) => (
                <option key={index} value={option.answer_value}>
                  {option.answer_value}
                </option>
              ))
            }
          </select>
        );
      default:
        return <Text as="p">Unsupported answer type: {question.answerType}</Text>;
    }
  };

  const calculateProgress = () => {
    if (isSurveyComplete) {
      return 100;
    }
    return Math.round((answeredQuestions / totalQuestions) * 100) || 0;
  };

  const handleLogout = () => {
    console.log('Logout clicked');
    // Implement logout logic here
    navigate('/');
  };

  return (
    <>
      <Helmet>
        <title>Questionnaire - EcoEasi</title>
        <meta name="description" content="Participate in the EcoEasi questionnaire to provide your insights." />
      </Helmet>
      <div className="flex w-full flex-col items-center bg-white shadow-xs">
        <Header simplified className="w-full" onLogout={() => navigate('/')} />
        <ProgressOverviewSection progress={calculateProgress()} />
        
        {isLoading ? (
          <div className="flex items-center justify-center h-64">
            <p>Loading questions...</p>
          </div>
        ) : isSurveyComplete ? (
          <ResultsSection />
        ) : (
          <div className="flex w-full">
            <QuestionnaireStepper 
              classifications={classifications}
              currentQuestion={questionNumber}
            />
            <div className="flex-1">
              <div className="container-xs mb-1 mt-12 md:px-5">
                <div className="flex gap-12 md:flex-col">
                  <div className="flex flex-1 flex-col gap-[218px] md:gap-[163px] md:self-stretch sm:gap-[109px]">
                    <div className="ml-2.5 flex flex-col gap-8 md:ml-0">
                      <div className="flex px-2.5 py-1.5">
                        {question ? (
                          <Heading
                            size="2xl_medium"
                            as="h2"
                            className="text-[24px] font-medium tracking-[0.12px] text-black md:text-[22px]"
                          >
                            ({question.questionNumber}) {question.questionText}
                          </Heading>
                        ) : questionNumber ? (
                          <p>Loading question {questionNumber}...</p>
                        ) : (
                          <p>No question loaded</p>
                        )}
                      </div>
                      <div className="flex flex-col gap-3.5">
                        {renderAnswerInput()}
                      </div>
                    </div>
                    <div className="ml-2.5 flex justify-between w-full md:ml-0">
                      <Button 
                        onClick={handleBackQuestion} 
                        variant="outline" 
                        shape="round" 
                        className="min-w-[90px] rounded-lg border border-blue-600 px-6 py-2 text-blue-600 bg-white hover:bg-blue-50 transition-colors duration-300"
                        disabled={questionNumber === 1}
                      >
                        Back
                      </Button>
                      <Button 
                        onClick={handleNextQuestion} 
                        shape="round" 
                        className="min-w-[90px] rounded-lg px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300 disabled:bg-blue-300"
                        disabled={isButtonLoading}
                      >
                        {isButtonLoading ? (
                          <div className="flex items-center gap-2">
                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Loading...
                          </div>
                        ) : (
                          'Next'
                        )}
                      </Button>
                    </div>
                  </div>
                  {/* Add the prompt answer and selection section here */}
                  <div className="w-[28%] md:w-full">
                    <TaraAIAssistant 
                      currentQuestion={question} 
                      onSuggestionSelect={(suggestion) => setAnswer(suggestion)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default QuestionnairePage;