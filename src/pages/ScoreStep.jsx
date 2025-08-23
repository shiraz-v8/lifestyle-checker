import { useEffect, useState } from "react";
import getScore from "../api/get-score";
import Spinner from "../styles/atoms/Spinner";

const MESSAGES = {
  good: "Thank you for answering our questions, we don't need to see you at this time. Keep up the good work!",
  bad: "We think there are some simple things you could do to improve your quality of life, please phone to book an appointment.",
};

const ScoreStep = ({ journeyData }) => {
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScore = async () => {
      setLoading(true);
      try {
        const result = await getScore(journeyData);
        setScore(result);
      } catch (err) {
        console.error("Error fetching score:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchScore();
  }, [journeyData]);

  if (loading)
    return (
      <div className="m-6">
        <Spinner />
      </div>
    );

  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="mb-6">Here's your score</h3>
      <p className="mb-4">You have scored {score.score} out of 9</p>
      <h2 className="mb-4">{score.outcome}</h2>

      {score.score <= 3 ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
          />
        </svg>
      )}

      <p className="text-center">
        {score.score <= 3 ? MESSAGES.good : MESSAGES.bad}
      </p>
    </div>
  );
};

export default ScoreStep;
