import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import connor from '../assets/connor_coaching.jpeg';
import rhys from '../assets/rhys+competing+photo.jpeg';
import beltAwards from '../assets/belt_awards.jpeg';

const Section = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 0), // Reduced from 8 to 4
  position: 'relative',
}));

const VisionCard = styled(Box)(({ theme }) => ({
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

const StoryCard = styled(Box)(({ theme }) => ({
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

const ImageContainer = styled(Box)(({ theme }) => ({
  flexShrink: 0,
  width: '280px',
  height: '350px',
  borderRadius: '12px',
  overflow: 'hidden',
  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
}));

const CardImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  border: '4px solid #ff4694',
});

// Footer spacer
const FooterSpacer = styled('div')({
  height: '100px', // Match footer height
  width: '100%',
});

export default function About() {
  return (
    <Box sx={{ pt: '110px', pb: '120px' }}>

      {/* Vision Section */}
      <Section>
        <Container maxWidth="lg">
          <VisionCard>
            {/* Image on the LEFT */}
            <ImageContainer>
              <CardImage 
                src={connor}
                alt="Training session at 37 Jiu Jitsu"
              />
            </ImageContainer>
            
            {/* Text content */}
            <Box sx={{ flex: 1 }}>
              <TitleText sx={{ color: 'white' }}>The Vision</TitleText>
              <Paragraph sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                At 37 Jiu Jitsu, our vision has always been simple: to provide safe, high-quality Brazilian Jiu-Jitsu training to everyone—regardless of age, experience, or background. Whether you're stepping on the mats for the first time or you're a seasoned grappler, we're here to help you grow, learn, and have a great time doing it.
              </Paragraph>
            </Box>
          </VisionCard>
        </Container>
      </Section>

      {/* Story Section - Kids Programme */}
      <Section>
        <Container maxWidth="lg">
          <StoryCard>
            {/* Text content */}
            <Box sx={{ flex: 1 }}>
              <TitleText sx={{ color: '#374151' }}>The Next Generation</TitleText>
              <Paragraph sx={{ color: '#6b7280' }}>
                At 37 Jiujitsu we coach kids as well as adults. It is important to us that we provide the facilities for the next generation in the area to flourish in martial arts. With our kids programme, we put our main focus on discipline, fun, and growth. Building their confidence and sense of camaraderie with each other.
              </Paragraph>
              <Paragraph sx={{ color: '#6b7280' }}>
                With our teen members, it is much the same although at this stage we begin putting a bigger focus than before on building solid technique. We currently do not have an exclusive teens class, however we let our teen members train in our main class along with the adults in their own different groups.
              </Paragraph>
              <Paragraph sx={{ color: '#6b7280' }}>
                We believe one of the best things you can do for your child is teach them martial arts, especially jiu jitsu. As we have seen repeatedly in our own experience the drastic benefits it has on children's confidence, physical and mental health, as well as helping them make new friends for life.
              </Paragraph>
            </Box>
            
            {/* Image on the RIGHT */}
            <ImageContainer>
              <CardImage 
                src={rhys}
                alt="Young competitor at 37 Jiu Jitsu"
              />
            </ImageContainer>
          </StoryCard>
        </Container>
      </Section>

      {/* Adults Programme Section - NEW */}
      <Section>
        <Container maxWidth="lg">
          <VisionCard>
            {/* Image on the RIGHT */}
            <ImageContainer>
              <CardImage 
                src={beltAwards}
                alt="Belt awards ceremony at 37 Jiu Jitsu"
              />
            </ImageContainer>
            
            {/* Text content */}
            <Box sx={{ flex: 1 }}>
              <TitleText sx={{ color: 'white' }}>Adults Programme</TitleText>
              <Paragraph sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                If you are an adult wanting to begin training with us, whether you're 18 or in your late 50's we've got you covered. In our adults classes we have members at various ages, ethnicity, sizes, skill level, male and female. So no matter who you are and where you are in life, as long as you're a decent person you're welcome at 37 Jiu Jitsu.
              </Paragraph>
              <Paragraph sx={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                We believe Brazilian jiu jitsu is one of the best hobbies you can ever take up, as it holds countless benefits. The main ones worth mentioning the most are, physical and mental health benefits, confidence building, massively improved self defense ability, joining a community, camaraderie with new fellow teammates and having the option of competing in a new sport (if you ever wish to go down that path).
              </Paragraph>
            </Box>
          </VisionCard>
        </Container>
      </Section>
      
      {/* Spacer to prevent footer overlap */}
      <FooterSpacer />
    </Box>
  );
}