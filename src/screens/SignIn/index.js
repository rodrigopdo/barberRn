import React, { useState } from 'react';

import SignInput from '../../components/SignInput';
import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import { 
  Container, 
  InputArea,
  CustomButton,
  CustomButtonText,
  SignMessageButton,
  SignMessageButtonText,
  SignMessageButtonTextBold
} from './styles';

export default () => {
  
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');

  return (
    <Container>
      <BarberLogo width="100%" height="160"/>    

      <InputArea>
        <SignInput 
          IconSvg={EmailIcon} 
          placeholder="Digite o seu e-mail"
          value={emailField}
          onChangeText={t=> setEmailField(t)}
        />
        <SignInput 
          IconSvg={LockIcon}
          placeholder="Digite a sua senha"
          value={passwordField}
          onChangeText={t=>setPasswordField(t)}
        />
        <CustomButton>
          <CustomButtonText>LOGIN</CustomButtonText>
        </CustomButton>
      </InputArea>

      <SignMessageButton>
        <SignMessageButtonText>Ainda não possui uma conta?</SignMessageButtonText>
        <SignMessageButtonTextBold>Cadastre-se</SignMessageButtonTextBold>
      </SignMessageButton>
    </Container>
  );
};