import { useHistory } from 'react-router-dom';
import s from './ContactLinkBack.module.scss';

const ContactLinkBack = () => {
  const history = useHistory();

  const handleGoBack = (e) => {
    e.preventDefault();
    history.goBack();
  };

  return (
    <button
      onClick={handleGoBack}
      type="button"
      className={`btn btn-info ${s.contactLinkBack}`}
    >
      <span>Go Back</span>
    </button>
  );
};

export default ContactLinkBack;
