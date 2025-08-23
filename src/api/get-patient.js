const getPatient = async (journeyData) => {
  try {
    const response = await fetch(
      `http://localhost:5005/get-patient/?patient_id=${journeyData.ref}&surname=${journeyData.surname}&dob=${journeyData.dob}`,
      {
        method: "GET",
        headers: {},
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response}`);
    }

    const data = await response.json();

    return data;
  } catch (error) {
    return {
      error: "Could not connect.",
      message: "Something went wrong..",
    };
  }
};

export default getPatient;
