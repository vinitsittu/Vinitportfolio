function loadContent(page) {
    console.log("Loading content for:", page);
    const content = document.getElementById('content');
    switch (page) {
        case 'home':
            content.innerHTML = `
                <section class="firstsection">
            <div class="leftsection">
                <img src="WhatsApp Image 2024-07-10 at 11.50.16 PM.jpeg" alt="">
                
            </div>
            <div class="rightsection">
                Hi, My name is <span class="purple">Vinit</span>
                <div> and I am a Skilled</div>
                <span id="element"></span>
                <br>

                <div style="font-size: 20px; margin-left:10px;font-style: italic; margin-top: 40px; color: rgb(211, 189, 129);">
                     
                    <a style="font-size: medium; background-color:  rgb(245, 245, 44); color: rgb(1, 1, 1); border-color: yellow; border-style: solid; border-width: 10px; border-radius: 10px; text-decoration: none; font-style:initial; font-family: Georgia, 'Times New Roman', Times, serif;" href="/">Connect  With Me </a>
                    <a class="resume-link" download href="Vinitresume.pdf">Resume</a>
                </div>
            </div>
                
            
        </section>
        <br><br><br>
        <hr id="hr0">
        
            ;
            <script src="https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js"></script>
            new Typed('#element', {
                strings: ['Web Developer', 'Software Engineer'],
                typeSpeed: 130,
            });`
            break;
        case 'about':
            content.innerHTML = `
                <section class="secondsection">

        <div>
            <h1 id="h1">
                EDUCATION
            </h1>
            <div style="display: flex;">
                <button id="b1">.</button>
                <button style="margin-left: 20px; font-size: small; background-color: rgb(25, 22, 22); color: white; border-radius: 10px;">2018 - 2019</button>
            </div>
            <div style="display: flex;">
                <hr id="hr1">
                <h1 style="font-size: 18px; margin-left: 10px; color: rgb(208, 185, 133);">SECONDARY EDUCATION <span>
                        <hr style="width: 0px; margin-bottom: 0px;">SRI LAKSHMI HIGH SCHOOL</span></h1>
            </div>
            <br>
            <br>

            <div style="display: flex;">
                <button id="b1">.</button>
                <button style="margin-left: 20px; font-size: small; background-color: rgb(25, 22, 22); color: white; border-radius: 10px;">2019 - 2021</button>
            </div>
            <div style="display: flex;">
                <hr id="hr1">
                <h1 style="font-size: 18px; margin-left: 10px; color: rgb(208, 185, 133);">PRE UNIVERSITY <span>
                        <hr style="width: 0px; margin-bottom: 0px;">NARAYANA COLLEGE</span></h1>
            </div>

            <br>
            <br>
            <div style="display: flex;">
                <button id="b1">.</button>
                <button style="margin-left: 20px; font-size: small; background-color: rgb(25, 22, 22); color: white; border-radius: 10px;">2021 - PRESENT</button>
            </div>
            <div style="display: flex;">
                <hr id="hr1">
                <h1 style="font-size: 18px; margin-left: 10px; color: rgb(208, 185, 133);">GRADUATION<span>
                        <hr style="width: 0px; margin-bottom: 0px;"> <b>G.PULLAIAH COLLEGE OF ENGINEERING AND TECHNOLOGY</b></span></h1>
            </div>
        </div>
        <div style="margin-left: 200px;">
            <img style="height: 200px; width: 250px; margin-top: 80px;" src="un.png" alt="">
        </div>
    </section>
    <hr id="hr0">

    <section class="thirdsection">
        <div>
            <h1 id="h1">
                SKILLS
            </h1>
            <div style="display: flex; margin-right: 400px;">
                <img style="height: 60px; border-radius: 40%;" src="images (4).png" alt="">
                <h1 style="margin-left: 60px; font-size: 20px; color: rgb(208, 185, 133);">HTML</h1>
            </div>
            <br>
            <br>

            <div style="display: flex;">
                <img style="height: 60px; margin-left: 10px; border-radius: 5%;" src="images (6).png" alt="">
                <h1 style="margin-left: 70px; font-size: 20px; color: rgb(208, 185, 133);">CSS</h1>
            </div>

            <br>
            <br>
            <div style="display: flex;">
                <img style="height: 70px; border-radius: 40%;" src="python1.webp" alt="">
                <h1 style="margin-left: 60px; font-size: 20px; color: rgb(208, 185, 133);">Python</h1>
            </div>

            <br>
            <br>
            <div style="display: flex;">
                <img style="height: 70px; width: 70px; border-radius: 50%;" src="java.png" alt="">
                <h1 style="margin-left: 50px; font-size: 20px; color: rgb(208, 185, 133);">Java</h1>
            </div>
            <br>
            <br>
            <div style="display: flex;">
                <img style="height: 70px; width: 70px; border-radius: 80%;" src="images (7).jpeg" alt="">
                <h1 style="margin-left: 50px; font-size: 20px; color: rgb(208, 185, 133);">Github</h1>
            </div>
            <br>
            <br>
            <div style="display: flex;">
                <img style="height: 70px; width: 70px; border-radius: 50%;" src="images (7).png" alt="">
                <h1 style="margin-left: 50px; font-size: 20px; color: rgb(208, 185, 133);">Problem Solving</h1>
            </div>
            <br>
        </div>

        <div style="margin-left: 200px;">
            <img style="height: 200px; width: 250px; margin-top: 180px; border-radius: 40%;" src="skills.jpg" alt="">
        </div>
    </section>
            `;
            break;
        default:
            content.innerHTML = '<p>Page not found.</p>';
    }
}

// Load the home content by default
window.onload = () => loadContent('home');
