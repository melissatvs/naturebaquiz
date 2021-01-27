import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import QuizLogo from '../src/components/QuizLogo'
import QuizBackground from '../src/components/QuizBackground'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import Head from 'next/head'


// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
      <div>
        <Head>
          <title>Quiz Natureba</title>
          <meta name="title" content="Quiz Natureba" />
          <meta name="description" content="" />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://naturebaquiz.melissatvs.vercel.app/" />
          <meta property="og:title" content="Quiz Natureba" />
          <meta property="og:description" content="" />
          <meta property="og:image" content={db.bg} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://naturebaquiz.melissatvs.vercel.app/" />
          <meta property="twitter:title" content="Quiz Natureba" />
          <meta property="twitter:description" content="" />
          <meta property="twitter:image" content={db.bg} />
        </Head>
        <QuizBackground backgroundImage={db.bg}>
          <QuizContainer>
            <QuizLogo />
            <Widget>
              <Widget.Header>
                <h1>{db.title}</h1>
              </Widget.Header>
              <Widget.Content>
                <p>{db.description}</p>
              </Widget.Content>
            </Widget>

            <Widget>
              <Widget.Content>
                <h1>Quizes da Galera</h1>

                <p>lorem ipsum dolor sit amet...</p>
              </Widget.Content>
            </Widget>
            <Footer />
          </QuizContainer>
          <GitHubCorner projectUrl="https://github.com/melissatvs" />
        </QuizBackground>
      </div>
  );
}