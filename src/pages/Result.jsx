import { PAGE_CONTENT } from "../content/page-content";
import Button from "../styles/atoms/Button";

const {
  steps: { Result: content },
} = PAGE_CONTENT;

const Result = ({ result, continueCTA }) => {
  const { error = false, message } = result;
  return (
    <div className="flex flex-col items-center gap-4">
      <h3 className="mb-6">{error ? content.stop : content.proceed}</h3>
      {!error ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z"
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
            d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z"
          />
        </svg>
      )}
      {message && <p>{message}</p>}
      {!error && (
        <Button className="mt-4 w-auto" onClick={continueCTA}>
          {content.cta}
        </Button>
      )}
      <br />
    </div>
  );
};

export default Result;
