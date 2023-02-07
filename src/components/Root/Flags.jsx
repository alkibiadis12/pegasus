import greekFlag from '../../assets/flags/gr.svg';
import unitedKingdomFlag from '../../assets/flags/gb.svg';
import franceFlag from '../../assets/flags/fr.svg';
import polandFlag from '../../assets/flags/pl.svg';
import italianFlag from '../../assets/flags/it.svg';
import { BoxCenter } from '../styledReusableComponents';
import { useTranslateStore } from '../../store/translateStore';
import { languageTypes } from '../../store/translateReducer/translateReducer';

function Flags() {
  const changeLanguage = useTranslateStore(state => state.changeLanguage);
  const changeLanguageHandler = e => {
    changeLanguage({ type: e.target.id });
  };
  return (
    <BoxCenter gap="15px">
      <img
        src={greekFlag}
        alt="Greek flag"
        width="30"
        onClick={changeLanguageHandler}
        id={languageTypes.gr}
        style={{ cursor: 'pointer' }}
      />
      <img
        src={unitedKingdomFlag}
        alt="United Kingdom flag"
        width="30"
        onClick={changeLanguageHandler}
        id={languageTypes.uk}
        style={{ cursor: 'pointer' }}
      />
      <img
        src={franceFlag}
        alt="France flag"
        width="30"
        onClick={changeLanguageHandler}
        id={languageTypes.fr}
        style={{ cursor: 'pointer' }}
      />
      <img
        src={polandFlag}
        alt="Poland flag"
        width="30"
        onClick={changeLanguageHandler}
        id={languageTypes.pl}
        style={{ cursor: 'pointer' }}
      />
      <img
        src={italianFlag}
        alt="Italian flag"
        width="30"
        onClick={changeLanguageHandler}
        id={languageTypes.it}
        style={{ cursor: 'pointer' }}
      />
    </BoxCenter>
  );
}

export default Flags;
