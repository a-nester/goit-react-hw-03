export const Contact = ({ element }) => {
  console.log(element);
  return (
    <div key={element.id}>
      <p>Name: {element.name}</p>
      <p>Phone: {element.number}</p>
    </div>
  );
};

export default Contact;
