import React, { useState, useEffect } from 'react';
import { Text, Button, Img } from "../components";
import TextArea from "./TextArea";
import { BiSend } from 'react-icons/bi';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const TaraAIAssistant = ({ currentQuestion, onSuggestionSelect, showOnlyButton = false }) => {
  const [userQuestion, setUserQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [aiResponse, setAiResponse] = useState('');
  const userId = localStorage.getItem('user_id') || "10006";

  useEffect(() => {
    setAiResponse('');
    setUserQuestion('');
  }, [currentQuestion?.questionNumber]);

  useEffect(() => {
    // Remove auto-population logic
  }, [currentQuestion, showOnlyButton]);

  const askTara = async (question) => {
    setIsLoading(true);
    console.log("Starting API request to OpenAI...");
    
    try {
      const response = await fetch('https://idiroanalytics-ecoeasi.openai.azure.com/openai/deployments/gpt-4o/chat/completions?api-version=2024-08-01-preview', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'api-key': 'c7a4b263a6914276a85bff50a913120f'
        },
        body: JSON.stringify({
          messages: [
            { 
              role: "system", 
              content: `You are Tara, an AI assistant for EcoEasi's ESG reporting platform. Provide clear, concise responses about ESG topics, CSRD compliance, and the VSME framework. Use markdown formatting:

- **Bold** for emphasis
- Bullet points for lists
- ### for section headers
- Keep paragraphs concise` 
            },
            { role: "user", content: question }
          ],
          temperature: 0.7,
          max_tokens: 800,
          model: "gpt-4"
        })
      });

      console.log("Response status:", response.status);
      const responseText = await response.text();
      console.log("Raw API Response:", responseText);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}, response: ${responseText}`);
      }

      try {
        const data = JSON.parse(responseText);
        if (data.choices && data.choices[0] && data.choices[0].message) {
          setAiResponse(data.choices[0].message.content);
          console.log("Successfully processed response:", data.choices[0].message.content);
        } else {
          throw new Error("Unexpected response structure");
        }
      } catch (parseError) {
        console.error("Error parsing JSON response:", parseError);
        throw new Error("Failed to parse API response");
      }

    } catch (error) {
      console.error('Error asking Tara:', error);
      setAiResponse(`I apologize, but I encountered an error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to convert markdown to HTML
  const markdownToHTML = (text) => {
    return text
      // Headers - process these first
      .replace(/### (.*?)(\n|$)/g, '<h3 class="text-xl font-semibold my-3">$1</h3>')
      .replace(/## (.*?)(\n|$)/g, '<h2 class="text-2xl font-semibold my-4">$1</h2>')
      .replace(/# (.*?)(\n|$)/g, '<h1 class="text-3xl font-bold my-4">$1</h1>')
      // Bold and Italic
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')
      // Lists
      .replace(/^\- (.*?)$/gm, '<li class="ml-4">• $1</li>')
      .replace(/<li.*?>(.*?)<\/li>/g, '<ul class="my-2">$&</ul>')
      // Paragraphs
      .replace(/\n\n/g, '</p><p class="my-2">')
      // Code blocks
      .replace(/`(.*?)`/g, '<code class="bg-gray-100 px-1 rounded">$1</code>');
  };

  const getSuggestionFromTara = async () => {
    if (!currentQuestion?.questionNumber) {
      console.error('No question number available');
      return;
    }

    setIsLoading(true);
    try {
      const aiRequestBody = {
        procedure: "ASK_TARA",
        user_id: userId,
        survey_id: "VSME_1",
        payload: {
          question_number: parseInt(currentQuestion.questionNumber),
          company_name: "Idiro Analytics"
        }
      };

      let response = await fetch('https://g84c60a1e52e6e4-ora23aidb.adb.eu-paris-1.oraclecloudapps.com/ords/api/ee_do_service/this_action', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(aiRequestBody)
      });

      let rawText = await response.text();
      
      try {
        const cleanedText = rawText
          .replace(/[\x00-\x1F\x7F-\x9F]/g, '')
          .replace(/\r\n/g, '\n')
          .replace(/\n/g, ' ')
          .trim();

        const data = JSON.parse(cleanedText);
        if (data && data.ai_generated_response) {
          onSuggestionSelect(data.ai_generated_response);
          return;
        }
      } catch (parseError) {
        console.error('Error parsing AI response, falling back to suggested answer');
      }

      // If AI suggestion fails, try to get suggested answer
      const questionRequestBody = {
        procedure: "GET_QUESTION",
        user_id: userId,
        survey_id: "VSME_1",
        payload: {
          question_number: parseInt(currentQuestion.questionNumber)
        }
      };

      response = await fetch('https://g84c60a1e52e6e4-ora23aidb.adb.eu-paris-1.oraclecloudapps.com/ords/api/ee_do_service/this_action', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(questionRequestBody)
      });

      rawText = await response.text();
      
      // Parse question data using regex like in QuestionnairePage
      const suggestedAnswerMatch = rawText.match(/"suggested_answer":\s*"([^"]+)"/);
      const answerTypeMatch = rawText.match(/"answer_type":\s*"([^"]+)"/);

      if (suggestedAnswerMatch && answerTypeMatch) {
        const answerType = answerTypeMatch[1];
        if (answerType === "FREE TEXT" && suggestedAnswerMatch[1]) {
          onSuggestionSelect(suggestedAnswerMatch[1]);
        }
      } else {
        throw new Error('No suggested answer available for this question');
      }

    } catch (error) {
      console.error('Error getting suggestion from Tara:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (showOnlyButton) {
    return (
      <Button
        shape="round"
        className="mt-4 flex items-center justify-start gap-2 rounded-lg border border-blue-600 px-4 py-2 text-blue-600 hover:bg-blue-50"
        onClick={getSuggestionFromTara}
        disabled={isLoading}
      >
        {isLoading ? (
          <div className="flex items-center gap-2">
            <AiOutlineLoading3Quarters className="animate-spin" />
            <span>Getting suggestion...</span>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Img
              src="images/tara2.png"
              alt="Tara AI"
              className="h-6 w-6 rounded-full object-cover"
            />
            <span>Get suggestion from Tara (AI)</span>
          </div>
        )}
      </Button>
    );
  }

  return (
    <div className="flex flex-col rounded-2xl bg-white shadow-lg border border-gray-200">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-gray-200 p-4 bg-gray-50">
        <Img
          src="images/tara2.png"
          alt="Tara AI Assistant"
          className="h-8 w-8 rounded-full object-cover"
        />
        <Text size="md" as="p" className="font-semibold text-gray-900">
          Tara AI Assistant
        </Text>
      </div>
      
      {/* Chat Area */}
      <div className="flex flex-col h-[500px]">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {aiResponse && (
            <div className="flex items-start gap-4 bg-gray-50 rounded-lg p-4">
              <Img
                src="images/tara2.png"
                alt="Tara AI"
                className="h-8 w-8 rounded-full object-cover"
              />
              <div className="flex-1">
                <div 
                  className="prose prose-sm max-w-none text-gray-700"
                  dangerouslySetInnerHTML={{ __html: markdownToHTML(aiResponse) }}
                />
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-200 p-4 bg-white">
          <div className="relative">
            <div className="flex items-center w-full rounded-lg border border-gray-300 focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
              <TextArea
                shape="round"
                name="Question Textarea"
                placeholder="Ask me about ESG reporting, CSRD compliance, or VSME framework..."
                value={userQuestion}
                onChange={(e) => setUserQuestion(e.target.value)}
                className="flex-1 border-none pl-4 pr-12 py-4 text-base min-h-[60px] resize-none focus:ring-0"
                rows={1}
              />
              <div className="pr-3">
                <Button 
                  shape="circle"
                  className={`p-1.5 rounded-full ${
                    userQuestion.trim() 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                  onClick={() => askTara(userQuestion)}
                  disabled={isLoading || !userQuestion.trim()}
                >
                  {isLoading ? (
                    <AiOutlineLoading3Quarters className="w-4 h-4 animate-spin" />
                  ) : (
                    <BiSend className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaraAIAssistant;
