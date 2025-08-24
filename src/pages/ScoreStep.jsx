import { useEffect, useState } from "react";

import { PAGE_CONTENT } from "../content/page-content";
import { getScore } from "../api";
import { Spinner, Text, Title } from "../styles";

const {
  steps: { ScoreStep: content },
} = PAGE_CONTENT;

const ScoreStep = ({ journeyData }) => {
  const [score, setScore] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchScore = async () => {
      try {
        const result = await getScore(journeyData);
        setScore(result);
      } catch (err) {
        console.error("Error fetching score:", err);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }
    };

    fetchScore();
  }, [journeyData]);

  if (loading)
    return (
      <div className="flex flex-col items-center gap-4">
        <Title text={content.loadingText} />
        <Spinner color="black" />
      </div>
    );

  return (
    <div className="flex flex-col items-center gap-4">
      <Title text={content.title} />
      <Text text={content.subHeading + score.score} extras="mb-4" />
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
      <Text text={score.message} extras="text-center" />
    </div>
  );
};

export default ScoreStep;
