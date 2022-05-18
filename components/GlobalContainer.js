import Container from '@mui/system/Container';

export default function GlobalContainer({ children, className }) {
  return (
    <Container className={className} maxWidth="md">
      {children}
    </Container>
  )
}