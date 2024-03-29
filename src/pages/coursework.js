// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import {
  flexWrapper,
  box,
  key,
  linkText,
  linkWrapper
} from '../components/css/pages.module.css'

// Step 2: Define your component
const CourseworkPage = () => {
  return (
    <Layout pageTitle="Coursework">
        <p>There are the courses I have taken:
        .</p>
        <br/>
        <div className={key}> 
          CS -&gt; Computer Science |
          LS -&gt; Life Sciences |
          HS -&gt; History of Science |
          EC -&gt; Economics | 
          GENED -&gt; General Education
        </div>
        <div className={key}> 
          ^ -&gt; Graduate Level Courses
        </div>
        {/* <p> * </p> */}
        <div className={flexWrapper}>
          <div>
            <h2>Spring 2022</h2>
            <ul className={box}>
              <li>CS 181: Machine Learning</li>
              <li>CS 205: High Performance Computing for Science and Engineering^</li>
              <li>CS 228: Computational Learning Theory^</li>
              <li>NEURO 231: Computational Neuroscience^</li>
            </ul>
          </div>
          <div>
            <h2>Fall 2021</h2>
            <ul className={box}>
              <li>CS 61: Systems Programming and Machine Organization</li>
              <li>CS 136: Economics and Computation</li>
              <li>STAT 110: Probability</li>
              <li>LS 2: Evolutionary Biology</li>
              <li>EC 10a: Principles of Microeconomics</li>
            </ul>
          </div>
          <div>
            <h2>Summer 2021</h2>
            <ul className={box}>
              <li>CHEM S-17: Principles of Organic Chemistry</li>
            </ul>
          </div>
          <div>
            <h2>Spring 2021</h2>
            <ul className={box}>
              <li>CS 124: Data Structures and Algorithms</li>
              <li>MATH 22b: Vector Calculus and Linear Alg</li>
              <li>GENED 1030: The Philosopher and the Tyrant</li>
              <li>CHNSE 123xb: Intermediate Chinese for Advanced Beginners</li>
            </ul>
          </div>
          <div>
            <h2>Fall 2020</h2>
            <ul className={box}>
              <li>COMPSCI 121: Intro to Theory of Computation</li>
              <li>NEURO 80: Neurobiology of Behavior</li>
              <li>MATH 22a: Vector Calculus and Linear Alg</li>
              <li>HS 100: Intro to History of Science</li>
              <li>CHNSE Bx: Elementary Chinese for Advanced Beginners</li>
            </ul>
          </div>
          <div>
            <h2>Spring 2020</h2>
            <ul className={box}>
              <li>COMPSCI 51: Computation Abstraction and Design</li>
              <li>LS 1b: Genetics, Genomics, and Evolution</li>
              <li>EXPOS 20: Expository Writing 20</li>
              <li>GENED 1045: Choose to Be Healthy </li>
            </ul>
          </div>
          <div>
            <h2>Fall 2019</h2>
            <ul className={box}>
              <li>HUM 10a: A Humanities Colloquium: From Homer to García Márquez</li>
              <li>LS 1a: Chemistry, Molecular Biology, and Cell Biology</li>
              <li>FRSEMR 30Q: Death and Immortality</li>
              <li>HS 128VD: Nature, Energy, Industry: A Cultural History of Physical Science</li>
            </ul>
          </div>
        </div>
    </Layout>
  )
}
// Step 3: Export your component
export default CourseworkPage