import Form from 'react-bootstrap/Form';


function Input(props) {
  return (
    <>
      <Form.Label htmlFor="inputPassword5">{props.Text}</Form.Label>
      <Form.Control
        type="password"
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
      />
      <Form.Text id="passwordHelpBlock" muted>
      </Form.Text>
    </>
  );
}

export default Input;