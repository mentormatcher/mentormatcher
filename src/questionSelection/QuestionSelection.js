import '../styles/global.css';
import '../styles/questionselection.css';

import Keys from '../Models/Keys';
import { useReducer, useState } from 'react';
import ProfileCreatorForm from './components/ProfileCreatorForm';
import { initialState, selectionReducer } from './reducers/selectionReducer';
import createdUserProfiles from './utils/createdUserProfiles';

const Questions = ({ data, dispatch, action }) => {
  return (
    <div className='survey'>
      {data.map((question, idx) => {
        return (
          <input
            className={`question ${question.selected ? 'selected' : ''}`}
            type='button'
            key={question.id}
            value={question.text}
            disabled={question.disabled}
            onClick={() =>
              dispatch({
                type: action,
                payload: {
                  id: question.id,
                  idx: idx,
                  text: question.text,
                  weight: idx + 1,
                },
              })
            }
          />
        );
      })}
    </div>
  );
};

const Pair = ({ data, dispatch }) => {
  return (
    <div className='pair'>
      <p>{data.mentee_question.text}</p>
      <img
        onClick={() =>
          dispatch({
            type: 'remove_pair',
            payload: {
              mentee_question_id: data.mentee_question.id,
              mentor_question_id: data.mentor_question.id,
            },
          })
        }
        className='connecting-arrow'
        src='../images/connecting-arrow.svg'
        alt='arrow pointing right'
        onMouseOver={brokenArrow}
        onMouseLeave={fixedArrow}
      />
      <p>{data.mentor_question.text}</p>
    </div>
  );
};

function brokenArrow(e) {
  if (e.target.setAttribute.src != '../images/broken-arrow1.svg') {
    e.target.setAttribute('src', '../images/broken-arrow1.svg');
  }
}

function fixedArrow(e) {
  if (e.target.setAttribute.src != '../images/connecting-arrow.svg') {
    e.target.setAttribute('src', '../images/connecting-arrow.svg');
  }
}

function Pairs({ pairs, dispatch }) {
  return (
    <div className='pairs-container'>
      {pairs.map((pair) => (
        <Pair dispatch={dispatch} key={pair.mentee_question.id} data={pair} />
      ))}
    </div>
  );
}

function submitQuestionPairs(pairs) {
  const pairsToSave = pairs.map((pair) => {
    return {
      menteeQuestion: {
        id: pair.mentee_question.id,
        idx: pair.mentee_question.idx,
        question: pair.mentee_question.text,
        weight: pair.mentee_question.weight,
      },
      mentorQuestion: {
        id: pair.mentor_question.id,
        idx: pair.mentor_question.idx,
        question: pair.mentor_question.text,
      },
    };
  });
  localStorage.setItem(Keys.Question_Pairs, JSON.stringify(pairsToSave));
}

export default function QuestionSelection() {
  const [state, dispatch] = useReducer(selectionReducer, initialState);

  const [menteeEmail, setMenteeEmail] = useState(state.mentee_survey);
  const [menteeFullName, setMenteeFullName] = useState(state.mentee_survey);

  const [mentorEmail, setMentorEmail] = useState(state.mentor_survey);
  const [mentorFullName, setMentorFullName] = useState(state.mentor_survey);

  function handleFormSubmit(e) {
    e.preventDefault();
    submitQuestionPairs(state.pairs);

    const mentees = JSON.parse(localStorage.getItem('Mentees'));
    const mentors = JSON.parse(localStorage.getItem('Mentors'));

    const newMentees = createdUserProfiles(
      mentees,
      menteeEmail,
      menteeFullName
    );
    const newMentors = createdUserProfiles(
      mentors,
      mentorEmail,
      mentorFullName
    );

    localStorage.setItem('Mentees', JSON.stringify(newMentees));
    localStorage.setItem('Mentors', JSON.stringify(newMentors));
    localStorage.setItem('questions_asked', JSON.stringify(state.pairs.length));

    window.location.href = './results.html';
  }

  return (
    <>
      <Pairs pairs={state.pairs} dispatch={dispatch} />
      <form onSubmit={handleFormSubmit} className='question-form'>
        {state.pairs.length > 0 && (
          <div className='buttons-container'>
            <input
              className='button-secondary'
              type='button'
              value='Clear selections'
              onClick={() => dispatch({ type: 'clear_pairs' })}
            />
            <input className='button-primary' type='submit' value='&#8674;' />
          </div>
        )}
        <div id='container'>
          <div className='survey'>
            <h2 className='survey-title'>Mentee Survey</h2>
            <ProfileCreatorForm
              type='Mentee'
              data={state.mentee_survey}
              setEmail={setMenteeEmail}
              setFullName={setMenteeFullName}
            />
            <Questions
              type='Mentor'
              data={state.mentee_survey}
              disabled={state.disable_mentee_questions}
              dispatch={dispatch}
              action='mentee_question_selected'
            />
          </div>
          <div className='survey'>
            <h2 className='survey-title'>Mentor Survey</h2>
            <ProfileCreatorForm
              data={state.mentor_survey}
              setEmail={setMentorEmail}
              setFullName={setMentorFullName}
            />
            <Questions
              data={state.mentor_survey}
              disabled={state.disable_mentor_questions}
              dispatch={dispatch}
              action='mentor_question_selected'
            />
          </div>
        </div>
      </form>
    </>
  );
}

const top_scroll = document.querySelector('.scroll-top-button');
const btm_scroll = document.querySelector('.scroll-btm-button');

document.body.addEventListener('scroll', () => {
  if (
    document.documentElement.scrollTop > 1000 ||
    document.body.scrollTop > 1000
  ) {
    top_scroll.classList.remove('hidden-button');
    btm_scroll.classList.add('hidden-button');
  } else {
    top_scroll.classList.add('hidden-button');
    btm_scroll.classList.remove('hidden-button');
  }
});

top_scroll.addEventListener('click', () => {
  document.body.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

btm_scroll.addEventListener('click', () => {
  document.body.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth',
  });
});

// X style cursor on mouseover of -> on question pairs
const arrows = document.querySelectorAll('.connecting-arrow');
const x_cursor = document.querySelector('.x-cursor');
arrows.forEach((item) => {
  item.addEventListener('click', () => {
    console.log('here');
  });
});

for (let i = 0; i < arrows.length; i++) {
  arrows[i].style.backgroundColor = 'blue';
}
