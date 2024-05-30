// components/LandingPage.tsx
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background: url('netflix-background.jpeg') center center / cover no-repeat;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

const Header = styled.header`
  position: absolute;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  background: rgba(0, 0, 0, 0.6);
`;

const Logo = styled.img`
  height: 40px;
`;

const Button = styled.button`
  background: #e50914;
  border: none;
  padding: 10px 20px;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  &:hover {
    background: #f40612;
  }
`;

const MainContent = styled.div`
  text-align: center;
  max-width: 800px;
  padding: 0 20px;
`;

const Title = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 20px;
`;

const SubTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 400;
  margin-bottom: 30px;
`;

const EmailForm = styled.form`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const EmailInput = styled.input`
  padding: 10px 20px;
  font-size: 16px;
  border: 1px solid #8c8c8c;
  border-radius: 2px 0 0 2px;
  outline: none;
`;

const SubmitButton = styled(Button)`
  border-radius: 0 2px 2px 0;
  font-size: 1rem;
`;

const LandingPage: React.FC = () => {
  return (
    <Container>
      <Header>
        <Logo src="netflix-logo.png" alt="Netflix Logo" />
        <Button>Sign In</Button>
      </Header>
      <MainContent>
        <Title>Unlimited movies, TV shows, and more.</Title>
        <SubTitle>Watch anywhere. Cancel anytime.</SubTitle>
        <EmailForm>
          <EmailInput type="email" placeholder="Email address" />
          <SubmitButton>Get Started &gt;</SubmitButton>
        </EmailForm>
      </MainContent>
    </Container>
  );
};

export default LandingPage;
