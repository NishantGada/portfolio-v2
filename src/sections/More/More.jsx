import React from 'react';
import './More.css';

export default function More() {
  return (
    <section id="more">
      <h2>
        More about Me
      </h2>

      <ul>
        <li className='more-item'>
          I can easily get hooked to a new Anime, but my all time favorites are <b>Dragon Ball Z, Naruto, Jujutsu Kaisen, and Haikuu</b>. I am yet to watch the most popular ones - Death Note and Attack on Titan (each in good time)
        </li>
        <li className='more-item'>
          I absolutely love playing the Piano whenever I get the opportunity/time, not that I am great at it, but it is comforting. Awakens a different side of me
        </li>
        <li className='more-item'>
          I love playing, watching, and going crazy about Cricket (Indian Sport). It is a part of my core childhood memories and has been my favorite amongst all the sports that I have ever tried and played (which is quite a lot)
        </li>
        <li className='more-item'>
          I someday aim to own a business/ start a company, and every step I take, I try to take in that direction - be it communcation, collaboration, business understanding, domain understanding, talking to people, learning new ways of learning, sometimes even watching too much Shark Tank
        </li>
        <li className='more-item'>
          Want to see how I <b>Leetcode</b>? For Python check <a href='https://leetcode.com/u/nishantgada/' target='_blank'>this</a> and for Java check <a href='https://leetcode.com/u/ngada/' target='_blank'>this</a>
        </li>
        <li className='custom-list'>
          <p>What drives me?</p>
          <ul>
            <li className='custom-list-item'>Collaboration & team work</li>
            <li className='custom-list-item'>A team sharing the same goal as me</li>
            <li className='custom-list-item'>Real impact which actually brings about good change</li>
            <li className='custom-list-item'>Innovation</li>
            <li className='custom-list-item'>An environment where I can promote mutual growth</li>
          </ul>
        </li>
        <li className='custom-list'>
          <p>Where I thrive & grow?</p>
          <ul>
            <li className='custom-list-item'>Collaboration & team work</li>
            <li className='custom-list-item'>Support & mutual understanding</li>
            <li className='custom-list-item'>Speed & dynamic environments</li>
            <li className='custom-list-item'>Knowing I am contributing to something impactful</li>
            <li className='custom-list-item'>Optimistic feedback that shows room for improvement & allows learning from mistakes</li>
          </ul>
        </li>
      </ul>
    </section>
  )
}
