import { ChangeEvent, FC, FormEvent, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { API_URL } from '~/constants/API_URL';

const formInitialState = {
  name: '',
  email: '',
  message: '',
  errors: [] as { msg: string }[],
  successMessage: '',
};

const FeedbackForm: FC = () => {
  const [formState, setFormState] = useState(formInitialState);

  const handleFormChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((state) => ({
      ...state,
      [event.target.name]: event.target.value,
    }));
  };

  const handleFormSubmit = async (event: FormEvent<HTMLFormElement>) => {
    let data = null;

    event.preventDefault();

    try {
      const response = await fetch(`${API_URL}/api/message`, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (!response.ok) {
        throw new Error('Unsuccessfull server response');
      }

      data = await response.json();
    } catch (err: unknown) {
      console.error((err instanceof Error && err.message) || 'Error while fetching data');
    }

    if (data && data.type === 'message' && data.status === 'error') {
      setFormState({
        ...formState,
        errors: data.payload,
      });
    } else if (data && data.type === 'message' && data.status === 'success') {
      setFormState({
        ...formInitialState,
        successMessage: 'Спасибо, ваше сообщение отправлено!',
      });
    }
  };

  const errorsArr = formState.errors.map((item, index) => {
    return (
      <div key={index} className="error">
        {item.msg}
      </div>
    );
  });

  return (
    <div id="footer-form-box">
      <div className="form-container">
        <div id="note" />
        <div id="fields">
          <form id="ajax-contact-form" noValidate onSubmit={handleFormSubmit}>
            <div className="input-box-name">
              <label htmlFor="name">Your name</label>
              <div className="input-field">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formState.name}
                  onChange={handleFormChange}
                />
              </div>
            </div>

            <div className="input-box-email">
              <label htmlFor="email">Your e-mail</label>
              <div className="input-field">
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={formState.email}
                  onChange={handleFormChange}
                />
              </div>
            </div>

            <div className="input-box-message">
              <label htmlFor="message">Your message</label>
              <div className="input-field-textarea">
                <textarea
                  name="message"
                  id="message"
                  cols={10}
                  rows={7}
                  value={formState.message}
                  onChange={handleFormChange}
                />
              </div>
            </div>

            {formState.errors.length > 0 ? (
              <CSSTransition
                in={true}
                appear={true}
                timeout={300}
                unmountOnExit={true}
                classNames="form-errors"
              >
                <div className="errors-box">{errorsArr}</div>
              </CSSTransition>
            ) : null}

            {formState.successMessage ? (
              <div className="success">{formState.successMessage}</div>
            ) : null}

            <div className="submit-button">
              <input className="btn grey" type="submit" name="submit" value="Send Message" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FeedbackForm;
