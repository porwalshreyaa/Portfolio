import React from 'react'

const Projects = () => {


  return (


    <section id="projects">

      <h1>Projects (in progress)</h1>

      <div className='Project-tile'>
        {/* <!-- Portfolio Gallery Grid --> */}


{/* one block */}
{/* <div className="row P1 Pr tech">

<div className="column">
  <div className="content">
    <img src="./logo192.png" alt="Mountains" />
    <h4>Project</h4>
    <p>Lorem ipsum dolor..</p>
  </div>
</div>
<div className="detail">
  <div className="content">
    <h4>Descriptive heading</h4>
    <p>Lorem ipsum dolor sit amet. Ut eius sequi sit aspernatur culpa aut accusantium magnam ex magni laborum et quod quia. Ut iste nulla quo voluptatem laboriosam aut aliquam illum qui officiis omnis nam tempora neque sed vitae optio est labore nostrum. Ea quia rerum sed voluptatibus nihil qui recusandae debitis ex voluptas architecto 33 ipsa sequi non error mollitia! Et ratione provident aut eius dignissimos et autem molestias eos nostrum aliquid qui voluptas odit.

Est odio internos et quia velit qui quam quam ab amet quia rem doloribus minus. A explicabo quos et dolore debitis aut sint distinctio qui illo culpa et possimus recusandae. Et galisum alias sit esse cupiditate qui magnam minima aut eaque minus id ipsum dolorem.

Aut eaque voluptatibus et numquam quisquam ut nemo possimus id ipsam facilis sit illo repellendus vel tempora quae ea explicabo maiores. Aut nisi necessitatibus nam nulla atque non enim dolor et architecto recusandae...</p>
  </div>
</div>

</div> */}
{/* one block */}






        <div className="row P1 Pl tech">

          <div className="column">
            <div className="content">
              <a href='https://porwalshreyaa.github.io/TodoListApp/todo.html'><img src="./todo.jpg" alt="To Do List" /></a>
              <h4><a href='https://porwalshreyaa.github.io/TodoListApp/todo.html'>To Do List</a></h4>
              <p>Html CSS Javascript</p>
            </div>
          </div>
          <div className="detail">
            <div className="content">
              <h4>Stores your Todo Data in Browser using DOM Manipulation - Jun 2023</h4>
              <p>I created this mini Javascript project to learn DOM Manipulation.<br/>
It has a small form that takes the TITLE, DESCRIPTION, and PRIORITY of the task as input. Providing TITLE is compulsory, and the rest is optional. Priority has radio buttons- Low, Medium, and High.
If you choose to set priority, your list highlights those tasks with High and Medium Priority.
It also has a Delete button for each entry in the list.<br/><br/>
When you create Project watching tutorials, there isn't much learning, but in this project I added mores features myself, based on the reviews I got from others.<br/><br/> 
It took me half a day to complete it. I made additional commits later on.I created this mini Javascript project to learn DOM Manipulation. Check it out!<br/><br/>
Skills: Document Object Model (DOM) · Bootstrap · Cascading Style Sheets (CSS) · HTML · JavaScript · HTML5</p>
            </div>
          </div>

        </div>



        <div className="row P2 Pr tech">

          <div className="column">
            <div className="content">
              <a href='https://replit.com/@ShreyaPorwal/MemoryPuzzle'><img src="./memory.jpg" alt="Memory game" /></a>
              <h4><a href='https://replit.com/@ShreyaPorwal/MemoryPuzzle'>Memory Game</a></h4>
              <p>Python - Pygame</p>
            </div>
          </div>
          <div className="detail">
            <div className="content">
              <h4>Uses 'PYGAME' (a popular Python library) - Feb 2023</h4>
              <p>This is a classic game. I created it in replit to learn Python libraries like Pygame, in my initial days when I did not know how to use VS code.
<br/><br/> This was the first time I read a programing book, I found the source code of this Pygame in the same book.<br/><br/>Skills: Pygame · Python (Programming Language)</p>  </div>
          </div>

        </div>



        <div className="row P1 Pl tech">

          <div className="column">
            <div className="content">
              <a href='https://replit.com/@ShreyaPorwal/QUIZ-Which-Doraemon-Character-You-are'><img src="./quiz.jpg" alt="Quiz" /></a>
              <h4><a href='https://replit.com/@ShreyaPorwal/QUIZ-Which-Doraemon-Character-You-are'>Doraemon Quiz</a></h4>
              <p>Basic Python - Sep 2022</p>
            </div>
          </div>
          <div className="detail">
            <div className="content">
              <h4>Uses Basic concepts such as If - Else statements</h4>
              <p>This is one of my very first Mini Projects, still my favorite!<br/><br/>Skills: Python (Programming Language)
              </p>
            </div>
          </div>

        </div>









      </div>





      {/* <!-- END GRID -->     */}

      <marquee className='blink'>More Projects on your way!</marquee>
    </section>
  )
}


export default Projects