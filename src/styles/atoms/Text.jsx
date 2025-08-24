const Text = ({ text, extras = "" }) => {
  return <p className={extras}>{text}</p>;
};

export default Text;
