import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import connor from '../assets/euros+podium.webp';
import tim from '../assets/tim.webp';
import ryan from '../assets/ryan+oneill+photo+blue+belt.webp';

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0),
  position: 'relative',
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  width: '280px',
  height: '350px',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
}));

// Dark card — matches VisionCard in About.jsx
const DarkCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#1a1a1a',
  borderRadius: '20px',
  padding: theme.spacing(6),
  border: '1px solid rgba(255, 255, 255, 0.1)',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(4),
  transition: 'all 0.3s ease',
  '&:hover': {
    borderColor: 'rgba(255, 255, 255, 0.3)',
    transform: 'translateY(-4px)',
  },
}));

const CardImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  border: '4px solid #ff4694',
});

// Light card — matches StoryCard in About.jsx
const LightCard = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  borderRadius: '20px',
  padding: theme.spacing(6),
  border: '1px solid #e5e7eb',
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(4),
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.1)',
    transform: 'translateY(-4px)',
  },
}));

const TitleText = styled(Typography)(({ theme }) => ({
  fontFamily: '"Anton", "Impact", sans-serif',
  fontWeight: 400,
  fontSize: 'clamp(1.8rem, 5vw, 2.5rem)',
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
  marginBottom: theme.spacing(2),
}));

const Paragraph = styled(Typography)(({ theme }) => ({
  fontFamily: '"Anton", "Impact", sans-serif',
  fontSize: '1.05rem',
  lineHeight: 1.9,
  letterSpacing: '0.05em',
}));

const TextBlock = styled(Box)({
  flex: 1,
});

// Footer spacer
const FooterSpacer = styled('div')({
  height: '100px',
  width: '100%',
});

export default function Meet() {
  return (
    <Box sx={{ pt: '110px', pb: '120px' }}>

      {/* Coach 1 — Conor — Image on RIGHT */}
      <Section>
        <Container maxWidth="lg">
          <DarkCard>
            <TextBlock>
              <TitleText sx={{ color: 'white' }}>Conor Marron</TitleText>
              <Paragraph sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Head coach Conor Marron runs the majority of our classes, having almost 10 years of martial arts experience. He regularly competes on some of the country's top shows and has notable wins on shows such as Grapple Kings and Chaos Grappling, as well as being an Irish champion, NI champion and European bronze medallist. In his spare time outside of Jiu Jitsu he enjoys coffee, outdoor activities, spending time with friends and family and occasionally gaming on his PS5.
              </Paragraph>
            </TextBlock>
            <ImageContainer>
              <CardImage 
                src={connor}
                alt="Conor Marron head coach"
              />
            </ImageContainer>
          </DarkCard>
        </Container>
      </Section>

      {/* Coach 2 — Tim — Image on LEFT */}
      <Section>
        <Container maxWidth="lg">
          <LightCard>
            <ImageContainer>
              <CardImage 
                src={tim}
                alt="Tim McCallister coach"
              />
            </ImageContainer>
            <TextBlock>
              <TitleText sx={{ color: '#374151' }}>Tim McCallister</TitleText>
              <Paragraph sx={{ color: '#6b7280' }}>
                Coach Tim is currently a purple belt and has years of experience. He competes very often and has also claimed a bronze medal at M1 at the European Championships, as well as regularly winning gold medals in local competition. He often steps in to coach the adults class and plays a big role in the gym. Outside of Jiu Jitsu Tim spends most of his time working towards his career, communicating with software engineers all over the globe. He enjoys running, skateboarding, surfing and playing the PS5.
              </Paragraph>
            </TextBlock>
          </LightCard>
        </Container>
      </Section>

      {/* Coach 3 — Ryan — Image on RIGHT */}
      <Section>
        <Container maxWidth="lg">
          <DarkCard>
            <TextBlock>
              <TitleText sx={{ color: 'white' }}>Ryan O'Neill</TitleText>
              <Paragraph sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Coach Ryan is currently a blue belt under Coach Conor Marron. He started training at 37 Jiu Jitsu in 2022 at one of the gym's first beginner programmes, and quickly fell in love with the sport. Coach Ryan plays an important role within the kids class, and along with Coach Conor holds his AccessNI certificates for the given role. He also helps coach kids GAA, which also makes him great for the role. In his time outside Jiu Jitsu he enjoys football, strength training, kettlebells, and chilling out with friends and family.
              </Paragraph>
            </TextBlock>
            <ImageContainer>
              <CardImage 
                src={ryan}
                alt="Ryan O'Neill coach"
              />
            </ImageContainer>
          </DarkCard>
        </Container>
      </Section>

      {/* Spacer to prevent footer overlap */}
      <FooterSpacer />
    </Box>
  );
}