// @flow
/* eslint jsx-a11y/label-has-associated-control: off, jsx-a11y/label-has-for: off */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, Form } from 'semantic-ui-react';
import routes from '../constants/routes';
import styles from './Home.css';

type Props = {};

const FormExampleForm = () => (
  <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder="First Name" />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder="Last Name" />
    </Form.Field>
    <Form.Field>
      <Checkbox label="I agree to the Terms and Conditions" />
    </Form.Field>
    <Button type="submit">Submit</Button>
  </Form>
);

export default class Home extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        This form is using Semantic UI!
        <FormExampleForm />
        <Link to={routes.COUNTER}>to Counter</Link>
      </div>
    );
  }
}
