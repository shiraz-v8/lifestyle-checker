const getScore = async (journeyData) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    age: journeyData.dob,
    answers: {
      Q1: journeyData.drinking,
      Q2: journeyData.smoking,
      Q3: journeyData.excersing,
    },
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return await fetch("http://localhost:5005/score/calculate", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => console.error(error));
};

export default getScore;
