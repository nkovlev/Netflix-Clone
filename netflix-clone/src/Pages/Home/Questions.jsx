import React from 'react'
import { useState } from "react";

const Questions = () => {
    const [activeQuestion, setActiveQuestion] = useState(null);
    const questions = [
        {
          id: 1,
          question: "What is Netflix?",
          answer:
            `Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.

            You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!`,
        },
        {
          id: 2,
          question: "How much does Netflix cost?",
          answer:
            "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $8.99 to $17.99 a month. No extra costs, no contracts.",
        },
        {
          id: 3,
          question: "Where can I watch?",
          answer:
            `Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

            You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.`,
        },
        {
          id: 4,
          question: "How do I cancel?",
          answer:
            "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
        },
        {
            id: 5,
            question: "Is Netflix good for kids?",
            answer:
                `The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.

                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.`,
          },
      ];
    
      return (
        <div className="container mx-auto mt-16">
          <h1 className="text-5xl font-bold mb-8 text-white text-center">Frequently Asked Questions</h1>
          <div className="space-y-4">
            {questions.map((question) => (
              <div key={question.id} className="bg-slate-800 p-6 shadow">
                <div
                  className="flex justify-between cursor-pointer text-white font-bold"
                  onClick={() =>
                    setActiveQuestion(activeQuestion === question.id ? null : question.id)
                  }
                >
                  <h2 className="text-2xl text-white font-normal">{question.question}</h2>
                  <span className="text-3xl">{activeQuestion === question.id ? '-' : '+'}</span>
                </div>
                {activeQuestion === question.id && (
                  <div className="mt-4 text-2xl text-white font-normal">{question.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      );
    }


export default Questions