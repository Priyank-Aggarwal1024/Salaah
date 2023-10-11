import IMG1 from "../../assets/cisco2.jpg";
import IMG2 from "../../assets/amazon.jpeg";
import IMG3 from "../../assets/gold.jpg";
import IMG4 from "../../assets/infosys.jpg";
import IMG5 from "../../assets/synopsys.jpg";
import IMG6 from "../../assets/tcs.jpg";
import IMG7 from "../../assets/cogni-banner.jpg";
import IMG8 from "../../assets/capg-banner.jpg";
import IMG9 from "../../assets/accenture-banner.jpg";

import Mentors from "../Company/mentors";
import harshit from '../../assets/harshit.jpeg';
import aryan from '../../assets/aryan.jpeg';
import akshat from '../../assets/akshat.jpeg';
import shreyanshShukla from '../../assets/shreyanshShukla.jpeg';
import vikramSeth from '../../assets/vikramSeth.jpeg';
import riturajSinghGour from '../../assets/riturajSinghGour.jpeg';
import sanjaySinghBisht from '../../assets/sanjaySinghBisht.jpeg';
import rohitJ from '../../assets/rohitJ.jpeg';
import abhinav from '../../assets/abhinav.jpeg';
import rishabh from '../../assets/rishabh.jpeg';
import ss from '../../assets/team/ss.jpg'
import yashS from '../../assets/team/yash.jpg'
import rohit from '../../assets/team/rs.jpg'
import rohitch from '../../assets/team/rohit.png'
import ug from '../../assets/team/utkarsh.png'
import us from '../../assets/team/us.jpg'
import sid from '../../assets/team/siddhantsingh.jpeg'
import rashmi from '../../assets/team/rashmisingh.jpg'
import aarushi from '../../assets/team/aarushi.jpeg'
import vritti from '../../assets/team/vritti.jpg'
import jhanvi from '../../assets/jhanvi.jpeg'
import mansi from '../../assets/mansi.jpeg'
import riya from '../../assets/riya.jpeg'
import ayush from '../../assets/ayush.jpeg'

export const compdata = [
  {
    id: 1,
    mentors: (
      <div className="all-mentors-cards">
        <Mentors
          name="Sameeksha Agarwal"
          img="https://drive.google.com/uc?export=view&id=1Fp11f6mutYB4msTcQqkuDxv8f71foHoB"
          link="https://www.linkedin.com/in/shreyansh-shukla-38842b187"
        />
        <Mentors
          name="Vritti Mehrotra"
          img={vritti}
          link="https://www.linkedin.com/in/vritti-mehrotra-1053841ab/"
        />
        <Mentors
          name="Aarushi Rai"
          img={aarushi}
          link="https://www.linkedin.com/in/aarushi-rai-0a176a1a7/"
        />
        <Mentors
          name="Rashmi Singh"
          img={rashmi}
          link="https://www.linkedin.com/in/rashmi-singh-5610b31b9/"
        />
      </div>
    ),
    company: "Cisco",
    cover: IMG1,
    alum__img:
      "https://drive.google.com/uc?export=view&id=1Fp11f6mutYB4msTcQqkuDxv8f71foHoB",
    alum__name: "Sameeksha Agarwal",
    alum__link: "https://www.linkedin.com/in/shreyansh-shukla-38842b187",
    about: (
      <div>
        Cisco Systems, Inc., or Cisco, is a global technology leader that has
        been making the Internet work since 1984. The company is based in
        California, USA. Cisco creates and sells a variety of technologies that
        power the Internet. The organisation is integrating its platforms in
        networking, security, collaboration, applications, and cloud computing.
        Since the company's inception, Cisco engineers have been pioneers in the
        development of Internet Protocol (IP)-based networking technologies.
      </div>
    ),
    jd: "Job Profile: Cisco Intern",
    process: (
      <div>
        <b>Eligibility Criteria:</b>
        <br />
        Pursuing a Bachelor of Engineering degree in Computer Science/IT or
        related branch
        <br />
        CGPA of 8.0 (out of 10) and above.
        <br />
        <br />
        Hundreds of applicants go through the Cisco interview process each year.
        Candidates that are more knowledgeable about networking principles and
        possess strong analytical abilities and computer intelligence will have
        no trouble passing the <b>Cisco interview.</b>
        <br /> <br />
        Selection Process involves three rounds:
        <br /> <br />
        <ul>
          <li>
            <b>Online Assessment Test:</b>
            <br />
            This online assessment test consists of the following sections with
            no negative marking.
            <br />
            <i>Aptitude Test:</i> Questions around Probability, Permutations and
            Combinations, Algebra, Simple & Compound Interest, Number Series,
            Profit and Loss, etc.
            <br />
            <i>Technical Test:</i> Questions around Computer Networking, C,
            Algorithms, Data Structures as well as digital electronics, CMOS and
            Microprocessor, etc.
            <br />
            There are 20 questions in the aptitude section, and 30 questions in
            the technical section. There will be a total of 50 questions to
            answer in 70 minutes.
          </li>
          <br />
          <li>
            <b>Technical Interview Rounds:</b>
            <br />
            In these, the interviewer may ask questions on various Computer
            fundamentals like Data Structures and Algorithms, Operating Systems,
            Algorithms, Database Management, Networking etc. Candidates will be
            tested in terms of in-depth knowledge in all the aspects of domains
            related to Computer Science and Networking. Other technical
            questions are normally asked from the projects or internships
            mentioned in the résumé. The company primarily focuses on a
            candidate’s approach towards a particular problem.
          </li>
          <br />
          <li>
            <b>HR Interview:</b>
            <br /> In this round, HR will usually question you about the job
            role, why do you want to join Cisco, the most challenging project
            that you were involved in, etc. Here the questions will be majorly
            asked from your résumé. Overall, you are required to be prepared
            well before this interview round and have a fair knowledge of Cisco
            and the stream from which you have got graduated/experienced.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 2,
    mentors: (
      <div className="all-mentors-cards">
        <Mentors
          name="Shreyansh Shukla"
          img= {shreyanshShukla}
          link="https://www.linkedin.com/in/shreyansh-shukla-38842b187"
        />
        <Mentors
          name="Vikram Seth"
          img={vikramSeth}
          link="https://www.linkedin.com/in/mahendra-vikram-seth-4744b513"
        />
        <Mentors
          name="RITURAJ SINGH GOUR"
          img={riturajSinghGour}
          link="https://www.linkedin.com/in/rituraj-singh-gour-bb7721171"
        />
        {/* <Mentors
          name="Sanjay Singh Bisht"
          img={sanjaySinghBisht}
          link="https://www.linkedin.com/in/sanjay-singh-bisht-744935180"
        /> */}
      </div>
    ),
    company: "Amazon",
    cover: IMG2,
    alum__img: "",
    alum__name: "",
    alum__link: "",
    about: (
      <div>
        The American multinational technology corporation <b>Amazon</b> focuses
        on a wide range of industries, including e-commerce, cloud computing,
        artificial intelligence (AI), digital streaming, etc. Along with Google,
        Apple, Microsoft, and Facebook, it is regarded as one of the Big Five
        corporations in the US IT sector. Amazon is recognised for its massive
        industry disruptions brought about by technology innovation and size.
        Being the largest online retailer, provider of AI assistants, and cloud
        computing platform in the world, Amazon employs over six lakh people, of
        whom more than 50,000 are Indians. As a result of it being the largest
        Internet company in the world in terms of revenue at the moment, Amazon
        has the greatest worldwide brand valuation.
      </div>
    ),
    process: (
      <div>
        It has the following rounds for the off campus process: <br />
        <br />
        <ul>
          <li>
            <b>Application Round:</b>
            <br />
            Best way to get noticed by Amazon recruiters is to maintain a good
            Linkedin profile and message recruiters. The candidate can also
            apply on the Amazon job portal but it is suggested that they also
            get a referral from an Amazon employee.
          </li>
          <li>
            <b>Online Aptitude round: </b>
            <br />
            This round will mainly consist of tricky puzzle-like questions to
            assess the aptitude and deep knowledge of the candidate. The test
            will consist of MCQ questions from a wide range of topics.
          </li>
          <li>
            <b>Technical Test</b>
            <br />
            This round will have easy to medium questions to judge the coding
            skills and technical knowledge of the candidate. The topics on which
            the questions for software engineers would be based are dynamic
            programming, arrays, graphs, trees, recursion, strings, algorithms,
            etc. The candidate needs to have a nice understanding of basic
            concepts of computer science.
          </li>
          <li>
            <b>Interview Rounds:</b>
            <br />
            Amazon conducts four interview rounds alongside an initial coding
            test. The coding test consists of DS/Algo problems. The first round
            is an HR round where they ask behavioral questions along with
            Computer Science theory questions to the candidate. The next three
            rounds focus solely on DS/Algo.
          </li>
          <br />
          <li>
            <b>
              <h2>After Interviews: </h2>
            </b>
            <br />
            The recruiter contacts the candidate after these rounds and tells
            the verdict. They also look at the candidate’s leadership principles
            along with technical skills.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 3,
    mentors: (
      <div className="all-mentors-cards">
        <Mentors
          name="Aarushi Rai"
          img="https://drive.google.com/uc?export=view&id=1cr9C3kducCWZsfvqJS6TgVg2Z9jMwvro"
          link="https://www.linkedin.com/in/aarushi-rai-0a176a1a7/?originalSubdomain=in"
        />
      </div>
    ),
    company: "Goldman Sachs",
    cover: IMG3,
    alum__img: "",
    alum__name: "",
    alum__link: "",
    about: (
      <div>
        In the areas of investment banking, securities, investment management,
        and consumer banking, The <b>Goldman Sachs Group, Inc.</b> is a
        preeminent international financial organisation that offers a wide range
        of financial services to a sizable and varied clientele that consists of
        businesses, financial institutions, governments, and private citizens.
        Utilizing its more than 150 years of experience working with the finest
        businesses, entrepreneurs, and organisations in the world, Goldman Sachs
        mobilises its personnel and assets to increase client success, increase
        individual prosperity, and hasten economic growth for all. According to
        Goldman Sachs, collaboration, teamwork, and honesty provide the ideal
        environment for employees to provide the best results for their clients.
        It looks for individuals who will flourish in this setting, prioritising
        communication, passion, and rapid thinking over certain qualifications.
      </div>
    ),
    jd: "Job Profile: Golman Sachs Summer Intern",
    process: (
      <div>
        <ul>
          <li>
            <b>
              <h2>Online Assessment Test </h2>
            </b>
            <br />
            The Goldman Sachs online assessment test is divided into the
            following sections: <br /> <br />
            <b>• Quantitative Aptitude:</b> It contains questions related to
            Numerical Computations and Numerical Reasoning. Prepare questions
            related to Numbers, Profit and Loss, Permutation and Combination,
            Averages, Time Speed and Distance, Ratio, Probability among other
            topics. Candidates' mathematical ability will be assessed through
            Diagrammatic puzzles and Series. <br /> <br />
            <b>• Reasoning:</b> It contains questions related to Logical
            Reasoning, Abstract Reasoning and Diagrammatic Reasoning. Be
            prepared on questions related to Data Arrangements, Coding and
            Decoding, Data Interpretation, Algorithms/ Flowcharts, Circuits,
            Input-Output patterns among other topics. <br /> <br />
            <b>• Verbal:</b> This section is related to Reading Comprehension.
            You must practise the topics listed below in order to answer more
            efficiently: Improvement and Correction of Sentences, Articles and
            Fill in the blanks. <br />
            <br />
            <b>• Technical section:</b> Technical Test will contain questions
            related to the Coding Aptitude(Advance), Computer science,
            Competitive Programming and Subjective Questions.
          </li>
          <br />
          <li>
            <b>
              <h2>Technical Interview </h2>
            </b>{" "}
            <br />
            Candidates who successfully complete the online assessment exam
            stage will receive an invitation to a technical interview in person.
            Technical interviews are designed to evaluate your technical skills,
            which are typically tailored to the position you are pursuing, as
            well as your problem-solving and stress-management talents. The
            interviewer will also assess your ability to solve problems. You'll
            be questioned about your prior endeavours and employment history, as
            well as what you accomplished, how you used technology, and the
            degree of your achievement. Know the foundations of computers as
            well and be ready.
            <br />
            Candidates with a solid conceptual grasp of at least one programming
            language, ideally C/C++, Java, Python, or JavaScript, are sought
            after by Goldman Sachs.
          </li>
          <br />
          <li>
            <b>
              <h2>HR Interview</h2>
            </b>{" "}
            <br />
            Candidates advance to the HR phase only after successfully
            completing the technical interview. Examining a candidate's
            personality, background, strengths, and shortcomings in order to
            assess whether or not they are a suitable fit for a particular
            position is the main objective of an HR interview. Therefore, it's
            critical to prepare thoroughly for the HR interview.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 4,
    mentors: (
      <div className="all-mentors-cards">
        <Mentors
          name="Kunal Tyagi"
          img="https://drive.google.com/uc?export=view&id=1eWdwx41DmlnRx-Nf5YQP1HK_hUs5LsNw"
          link="https://www.linkedin.com/in/kunal-tyagi-4042b217a/"
        />
        <Mentors
          name="Mansi Chauhan"
          img={mansi}
          link="https://www.linkedin.com/in/mansi-chauhan-1a914b197/"
        />
        <Mentors
          name="Jhanvi Singh"
          img={jhanvi}
          link="https://www.linkedin.com"
        />
        <Mentors
          name="Ayush Shukla"
          img={ayush}
          link="https://www.linkedin.com/in/ayush-shukla-73a605147/"
        />
        <Mentors
          name="Rohit Choudhary"
          img={rohitch}
          link="https://www.linkedin.com/in/rohit-choudhary13/"
        />
        <Mentors
          name="Utkarsh Goel"
          img={ug}
          link="https://www.linkedin.com/in/goelutkarsh/"
        />
      </div>
    ),
    company: "Infosys",
    cover: IMG4,
    alum__img: "",
    alum__name: "",
    alum__link: "",
    about: (
      <div>
        A leading worldwide IT consulting firm, Infosys helps customers from a
        range of industry segments improve their business performance by
        offering end-to-end solutions in the areas of business consulting,
        information technology, and outsourcing services. Infosys primarily
        provides businesses in the manufacturing, insurance, and other
        industries with software development, product maintenance, and
        independent validation services. <br /> <br />
        Before changing its name to Infosys, the company was known as Infosys
        Technologies Ltd. N. R. Narayana Murthy and a group of six other
        engineers created Infosys in Pune. Just $250 in startup funding was used
        to launch the firm. Bangalore, India presently serves as the
        headquarters of Infosys. Infosys supports customers in more than 50
        countries as they develop and carry out various plans for their path
        toward digital transformation. Infosys not only assists its clients in
        improving their overall company performance but also promotes their
        transformation into smarter organisations. Their clients may thus
        concentrate on the most important business objectives. <br /> <br />
        Infosys has extensive industry knowledge. Infosys offers very effective,
        cutting-edge goods and services, from assisting in the development of
        lighter, stronger passenger aircraft and more fuel-efficient smart
        automobiles to supplying banks with the means to extend financial
        inclusion to the world's most remote regions. Infosys alters how people
        live and work through this rigorous procedure.
      </div>
    ),
    jd: "Job Profile: Infosys SDE Intern",
    process: (
      <div>
        
        <ul>
          <li>
            <b>• Online Evaluation Test</b>
          </li>
          <li>
            <b>• HR Interview</b>
          </li>
          <li>
            <b>• Technical Interview</b>
          </li>
        </ul>
        <br />
        <br />
      {/* -----------------------------------------<AJ>------------------------------------------------------ */}
        <h2>InfyTQ</h2>
        <br/>
        InfyTQ is a free platform open to all engineering students in their third and fourth year across India. This Infosys Certification will test your knowledge in programming and databases. Infosys started taking the InfyTQ exam to recruit students for Infosys Certification Program.
        <br/><br/>
        <b>Eligibility Criteria</b>:
        You should either be a B.E., B. Tech, M.E., M. Tech., M.Sc., MCA, or a MCM student graduating in 2024.
        <br/><br/>
        <b>Examination Process: </b><br/>
        Infosys Certification comprises three examination rounds: <br/><br/>
        <b> • Qualifier Round: </b>
        Qualifier Round is the first round of Infosys Certification examination. It is a mandatory examination which will test your knowledge on Programming
        and Database Management and will include Aptitude questions as well. Clearing the Qualifier Round ensures your eligibility to take Infosys Certification. This is not
        valid if you are barred for violation of code of conduct in the Qualifier Round.
        At the time of registration for the Qualifier Round, you will have the option to choose a programming language between Java and Python and you can select a date and
        time slot that is most suitable to you for taking the examination. You can attempt the Qualifier Round examination from anywhere and from any system provided it has
        a web-camera as the online examination will be web-camera proctored.
        <br/><br/>
        <b> • Certification Round: </b>
        This round will assess your in-depth programming and database management skills through objective and hands-on questions. On scoring 65%
        or more in the Certification round and after going through the necessary checks, you will become eligible to appear in a behavioral interview on the same day. If you
        clear the interview, you will receive an offer for the role of Systems Engineer and become an Infosys Certified Software Programmer.
        <br/><br/>
        <b> • Adwantage Round: </b>
        This is an optional round for those who clear the Certification Round to gain an advantage and win a job opportunity for niche technical roles of
        Specialist Programmer and Digital Specialist Engineer at Infosys. If you decide to go through this round, you will have to take a test that will assess your programming
        and other technical skills. You will have the option to take this test in a programming language from multiple options. If you clear the round, you will receive a pre-
        placement interview opportunity for the Specialist Programmer and the Digital Specialist Engineer role and become an Infosys Certified Software Programmer.
        In case, you do not opt/clear the Advantage Round, your Systems Engineer offer is still valid.
        <br/><br/>

        <b>Steps to take the Infosys Certification Examination: </b><br/><br/>
        <ul>
          <li>
            <p>• Register for Infosys Certification on this page</p>
          </li>
          <li>
            <p>• Book a test slot from the available options and select the preferred programming language (Java/Python) for the Qualifying Round.</p>
          </li>
          <li>
            <p>• Complete the recommended learning journey to gain a headstart in your preparation for the examinations.</p>
          </li>
        </ul>



        <br/>

      {/* ------------------------------------------<AJ>----------------------------------------------------- */}
        <h2>HR Interview</h2>
        <br />
        If you pass the technical interview, you will be invited to the HR
        interview stage. Essentially, the goal of this evaluation is to
        determine if you are the greatest candidate for the firm. Your history,
        education, interests, and even your outlook on life are all up for
        scrutiny in this situation. Some queries about the Infosys corporation
        must be anticipated. Be prepared to answer any inquiries meant to gauge
        your sincerity in your application for the position.
      </div>
    ),
  },
  {
    id: 5,
    mentors: (
      <div className="all-mentors-cards">
        <Mentors
          name="Anshita Yadav"
          img="https://drive.google.com/uc?export=view&id=1psE2RSinJb23jt-EKBgJ4fhzYF6ipa9T"
          link="https://www.linkedin.com/in/anshita-yadav-a4748a213/"
        />
      </div>
    ),
    company: "Synopsys",
    cover: IMG5,
    alum__img: "",
    alum__name: "",
    alum__link: "",
    about: (
      <div>
        Technology from Synopsys is at the core of technologies that are
        revolutionising how people work and play. Autonomous vehicles. learning
        computers. blazing-fast connectivity among the datasphere's trillions of
        gadgets. These innovations have ushered in the era of "Smart
        Everything," where gadgets are becoming more intelligent and
        interconnected, and security is built right into the design.
        <br /> <br />
        High-performance silicon processors and an increasingly expanding volume
        of software content are driving this new age of innovation. With the
        most cutting-edge technologies available for chip design, verification,
        IP integration, and software security and quality testing, Synopsys is
        at the forefront of the Smart Everything movement. We support our
        clients' innovation efforts from silicon to software so they may create
        incredible new products.
      </div>
    ),
    jd: "Job Profile: Synopsys SDE Intern",
    process: (
      <div>
        Synopsys conducts 5-8 rounds to select freshers as Software Engineer in
        their organisation.
        <br />
        <br />
        <ul>
          <li>• Written Round</li>
          <li>• Technical Round 1</li>
          <li>• Technical Round 2</li>
          <li>• Technical Round 3</li>
          <li>• Technical Round 4</li>
          <li>• Technical Round 5</li>
          <li>• HR Round 1</li>
          <li>• HR Round 2</li>
        </ul>
        <br />
        <h1>Academic Criteria: </h1>
        <br />
        <li>• 75 percent or above in B.Tech, Class X and XII.</li>
        <li>• No backlogs at the time of interview.</li>
        <br />
        <br />
        <h2>Online Round :</h2>
        <br />
        Written round oftenly consists of questions Quantitative Aptitude,
        Logical Ability, C, C++, Algorithm, Data structures, Digital Design. To
        be prepared for aptitude section you can practice from our Placement
        Section.
        <br />
        <br />
        <h2>Technical Rounds:</h2>
        <br />
        The students who clear the written round are called for Technical
        Interview.To clear this round you should be clear with your basics. You
        should be prepared with Data structures and Algorithms, and C language.
        Students will be expected to write codes in the interview. They could
        also be ask questions from resume. You may be asked puzzles in this
        round. To be prepared for puzzles you can practice from our Puzzles
        section.
        <br />
        <br />
        <h2>HR Round :</h2>
        <br />
        You can expected general HR questions like :
        <li>• Tell me about Yourself</li>
        <li>• Why Synopsys?</li>
        <li>• What will you do if you get offer from Google/Facebook, etc ?</li>
        <li>• What kind of culture do you want to work in?</li>
        <li>• What are your strengths and weaknesses ?</li>
        <li>• Questions form resume</li>
        <br />
      </div>
    ),
  },
  {
    id: 6,
    mentors: (
      <div className="all-mentors-cards">
        <Mentors
          name="Animesh Porkhriyal"
          img="https://drive.google.com/uc?export=view&id=1GXSKEIYmP8Hlp9uPUIm9EOhMNfnn1OLO"
          link="https://www.linkedin.com/in/animesh-pokhriyal-1121441b0/"
        />
        <Mentors
          name="Rohit Jhingran"
          img={rohitJ}
          link="https://www.linkedin.com/in/rohit-jhingran-7a60a1207/"
        />
        <Mentors
          name="Abhinav Srivastava"
          img={abhinav}
          link="https://www.linkedin.com/in/abhinav-srivastava-a6442714b/"
        />
        <Mentors
          name="Rishabh Krishna"
          img={rishabh}
          link="https://www.linkedin.com/in/rishabh-krishna-47045477/"
        />
      </div>
    ),
    company: "TCS",
    cover: IMG6,
    alum__img: "",
    alum__name: "",
    alum__link: "",
    about: (
      <div>
        Tata Consultancy Services Limited (TCS) is an Indian multinational information
        technology (IT) service, consulting and business solutions company Headquartered
        in Mumbai, Maharashtra. It is a subsidiary of the Tata Group and operates in 46
        countries. TCS is one of the largest Indian companies by market capitalization ($80
        billion). TCS is now placed among the ‘Big 4’ most valuable IT services brands
        worldwide. TCS alone generates 70% dividends of its parent company, Tata Sons. In
        2015, TCS is ranked 64th overall in the Forbes World’s Most Innovative Companies
        ranking, making it both the highest-ranked IT services company and the top Indian
        company. It is the world’s 10th largest IT services provider by revenue. As of
        December 2015, it is ranked 10th on the Fortune India 500 list.
      </div>
    ),
    jd: "Job Profile: Software Engineer",
    process: (
      <div>
        <ul>
          <li>
            <h2>Round 1(Written Round): </h2>
            <br />
            The Written round consists of four sections and the total time allotted is 90 minutes.
            The four sections include:<br />
            <br />
            <b>Quatitative Aptitude Test:</b>:<br /> The first is the Quantitative Aptitude test where the
            numerical and the reasoning ability sections are tested. There are 20 questions that
            need to be attempted in 40 minutes. There are 2-star questions which have more
            weight than normal questions and are a bit tricky. There is negative marking of 1/3rd
            for the questions other than the star. Important topics include Number system,
            Equations, Ratio and Proportion, Percentages, Profit and Loss, Time and Work, Time
            speed Distance, Areas and Mensuration, Averages, Permutations and Combinations,
            Probability, Plane geometry, Seating Arrangements, Sets, Progressions, Functions,
            Series, Coding, Truth and Lie based puzzles. <br />
            Verbal Ability: This section assesses English grammar, how to use it
            correctly, and reading comprehension.
            <br />
            <br />
            <b>Programming Language Test:</b>:<br /> This round consists of general questions from
            computer science and programming languages. It consists of 10 to 12 questions and
            the time allotted is 20 minutes. It is an MCQ round and basically consists of basic
            programming questions.
            <br />
            <br />
            <b> Coding Round: </b>:<br />This is a technical coding round. It consists of 1 to 2 questions
            and the time allotted is 20 minutes.
            <br />
            <br />
            <b>E-mail writing :</b>:<br /> There will be given certain clues/words using which you have to
            write an e-mail addressing the scenario. You have to type the e-mail in the space
            given. The most important thing is you have to use all the phrases given without
            missing even a single one. The time allotted is 10 minutes.
            <br />
            <br />
            <b>Note:</b>:<br /> Students with more than 8.5 or 80 % respectively have to just appear for the
            verbal section i.e, the email writing. The students with rank under 1000 in CodeVita
            round 1 will be allowed to skip the written round and appear directly for interviews.
            <br />
            
          </li>
          <li>
            <br />
            <b>Round 2(Technical Round):</b>
            <br />
            The students who clear the written round are called for Technical Interview. There is
            no hard & fast rule for which questions will be asked in this round, you can expect
            questions on any topic depending on the panel. To clear this round you should be
            clear with your basics. You should be prepared with Data structures and Algorithms,
            DBMS, Operating System, Networking, OOPs concepts and a programming
            language of your choice. Students from branches other than CS should prepare for
            the other two subjects related to their branch. CS students will be expected to write
            codes in the interview. You may be asked puzzles in this round.
          </li>
          <li>
            <br />
            <b>Managerial interview: </b>
            <br />This round includes everything which was in Technical round plus it will be under
            pressure and a lot of cross-checking. Doubts will be raised on your answers to check
            if you can handle stress or not. Students may or may not be sent to this round
            depending on the feedback of the previous round. If the feedback of the previous
            round was good you may expect to directly been sent to HR round. Key for this
            round is to be calm, confident, clear on your thoughts and to not give up on
            pressure. If you don’t know the answer you must try to attempt it with whatever you
            know.
          </li>
          <li>
            <br />
            <b>HR Round: </b>
            <br />
            Along with the typical HR inquiries about your skills and
            shortcomings, motivations for applying to the company, reasons why
            you should be recruited, etc., you can anticipate inquiries about
            your work history, schooling, extracurricular activities, and family
            history. They can also inquire about TCS, including its founding
            date, goals, core principles, organisational structure, and other
            details.
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: 7,
    mentors: (
      <div className="all-mentors-cards">
        <Mentors
          name="Ria Pundir"
          img={riya}
          link="https://www.linkedin.com/in/ria-pundir-9390a89b/"
        />
        <Mentors
          name="Akshat Mittal"
          img={akshat}
          link="https://www.linkedin.com/in/akshat-m-002965120/"
        />
        <Mentors
          name="Harshit Bhardwaj"
          img={harshit}
          link="https://www.linkedin.com/in/harshitbhardwaj-/"
        />
        <Mentors
          name="Aryan Bansal"
          img={aryan}
          link="https://www.linkedin.com/in/aryan-bansal-474295170/"
        />
        <Mentors
          name="Siddhant Chaudhary"
          img={sid}
          link="https://www.linkedin.com/in/anshita-yadav-a4748a213/"
        />
        <Mentors
          name="Utkarsh Singh"
          img={us}
          link="https://www.linkedin.com/in/anshita-yadav-a4748a213/"
        />
      </div>
    ),
    company: "Cognizant",
    cover: IMG7,
    alum__img: "",
    alum__name: "",
    alum__link: "",
    about: (
      <div>
       Cognizant is a multinational technology giant based in the United States that deals in
      business consulting, information technology, and outsourcing. Cognizant technology
      solutions help businesses in modernizing technology and improving customer
      experiences. Cognizant specializes in IT, consulting, ITO, information security, and
      BPO services. In 2022, Cognizant expected revenue of over USD 20 billion and hired
      over 50,000 freshers from colleges in India <br/>
      The cognizant recruitment process needs students to go through either an aptitude test
      or skill-based assessments along with technical and HR interviews. The hiring
      channels at Cognizant are spread across four different routes which are as follows:
      <ul>
        <li>Gen C: Individuals with minimal programming expertise. They should have the
      ability to comprehend complex problems and deliver smart solutions. For this
      stage, knowledge of programming is recommended but not mandatory.</li>
        <li>Gen C: Individuals with minimal programming expertise. They should have the
      ability to comprehend complex problems and deliver smart solutions. For this
      stage, knowledge of programming is recommended but not mandatory.</li>
        <li>GenC Pro: Individuals with expertise in specific technologies, such as PEGA,
      Salesforce, SAP, Cybersecurity, ServiceNow, etc. are eligible to be hired
      through this channel. The salary package of GenC Pro candidates includes a
      skill premium over and above the GenC package.</li>
        <li>GenC Next: This hiring mode is suitable for individuals who have advanced
      programming abilities, coding skills, and full-stack abilities. GenC Next
      candidates have a differential salary package after a mandatory three-month
      internship with a stipend</li>
      </ul>
      </div>

    ),
    jd: "Entry Level Profiles",
    process: (
      <div>
        <ul>
          <li>
            <h2>Eligibility Criteria</h2>
            <h3>The eligibility criteria for participating in the Cognizant recruitment process are as
            follows:</h3>
            <br />
            • More than 60% marks in 10th and 12th.<br/>
            • Minimum percentage criteria - 60% marks in graduation.<br/>
            • Maximum gap should be 1 year.<br/>
            • Qualification must be BE, B Tech, ME, M Tech, or MCA.<br/>
            • Candidate must not have any pending backlogs during the selection process.<br/>
          </li>
          <br />
          <li>
            <b>
              <h2>Written Test Pattern </h2>
            </b>
            <br />
            <h2>Stage 1: Written Round</h2>
            <b>GenC</b><br/>
            Aptitude Test:<br/>
            Cognizant recruitment process usually have aptitude questions
            related to:<br/>
            • Analytical ability (Data
            sufficiency, Venn diagrams, blood relations, etc.)<br/>
            • Abstract reasoning
            (Cubes& dice, paper folding & cuts, mirror images, etc.)<br/>
            • Critical thinking (Codingdecoding, syllogism, inputoutput, etc.)<br/>
            • Numerical ability (Ages, time & work, probability,
            equations, profit-loss, arithmetic operators, etc.)<br/>
            • Verbal ability (Parajumbles, reading comprehension,
            synonyms, antonyms, etc.)<br/>
            • Data Analysis (Data interpretation) 
            <br/>
            <br/>
            <br/>
            <b>GenC Elevate</b><br/>
            Section 1: Conceptual and code analysis
             <br/>
              Section 2: Coding
              <br/>
              Control Structure, OOPS, Classes (base class, child class, etc.), Objects(C/C++), 
              Struct, Trees, DSA-Arrays, Exception Handling(JAVA/C++), Searching/Sorting, 
              Pointers, File Handling(JAVA), Utility API(JAVA, C++), Basic Query Language.
            <br/>
            <br/>

          </li>
          <br />
          <li>
            <b>
              <h2>Stage 2: Interview Process</h2>
              <h4>The entire interview process has two rounds - technical interview and HR interview</h4>
            </b>
            <br /><h3>Technical Interview Round</h3><br/>

            <b>GenC </b>
            Programming languages such as C, C++, DSA, and basic
             questions about projects done during graduation<br/><br/>
            <b>GenC Elevate </b>
            Programming languages such as C, C++, DSA, DBMS, SDLC, Projects, 
            Certification courses(if any) NOTE: Certification courses such 
            as AI, ML, Cybersecurity, etc. add value to your CV. However, 
            you must only add these to your CV if you are thorough with 
            these topics. <br/><br/>
            <br /><h3>HR Round</h3><br/>
            Cognizant interview questions include basic questions about your
             personality, education, interests, family background, internships, 
             current technology trends, etc.
            <br/><br/>
          </li>
          <br />
        </ul>
      </div>
    ),
  },
  {
    id: 8,
    mentors: (
      <div className="all-mentors-cards">
        <Mentors
          name="Yash Suri"
          img={yashS}
          link="https://www.linkedin.com/in/yashsuri23/"
        />
        <Mentors
          name="Shruti Singh"
          img={ss}
          link="https://www.linkedin.com/in/shruti-singh-7ba9031b1/"
        />
        <Mentors
          name="Rohit Singhwal"
          img={rohit}
          link="https://www.linkedin.com/in/rohit-singh-bb1a6020a/"
        />
      </div>
    ),
    company: "Capgemini",
    cover: IMG8,
    alum__img: "",
    alum__name: "",
    alum__link: "",
    about: (
      <div>
        Capgemini is a global leader in partnering with companies to transform
        and manage their business by harnessing the power of technology. The
        Group is guided everyday by its purpose of unleashing human energy
        through technology for an inclusive and sustainable future. It is a
        responsible and diverse organization of over 350,000 team members in
        more than 50 countries. With its strong 55 year heritage and deep
        industry expertise, Capgemini is trusted by its clients to address the
        entire breadth of their business needs, from strategy and design to
        operations, fueled by the fast evolving and innovative world of cloud,
        data, AI, connectivity, software, digital engineering and platforms.
      </div>
    ),
    jd: "Software Engineer & Senior Analyst",
    process: (
      <div>
        The following are the stages or online test pattern of the Capgemini
        recruitment process for the role of Analyst. The most recent rounds of
        Capgemini's recruitment process are listed below
        <br />
        <br />
        <ul>
          <li>• Capgemini's Pseudo Code section</li>
          <li>• MCQ Based English Communication Test</li>
          <li>• Game Based Aptitude Test</li>
          <li>• Behavioral Competency Profiling (Non Elimination Round)</li>
          <li>• Technical and HR Interview</li>
        </ul>
        <br />
        <h1>Academic Criteria: </h1>
        <br />
        <li>• 65 percent or above in B.Tech, Class X and XII.</li>
        <li>• No backlogs at the time of interview.</li>
        <br />
        <br />
        <h2>ABOUT THE PROCESS:</h2>
        <br />
        <i>Aptitude and Essay Round :</i> <br />Aptitude round consists of 3 sections namely 
        Quantitative reasoning, logical reasoning and essay writing section. This round is 
        generally conducted on Cocubes.<br />
        <br />
        <i>Technical Aptitude Round:</i> <br />The students who clear the quantity round 
        are called for Technical Aptitude Round. To clear this round you should be clear
         with your basics. You should be prepared with Data structures and Algorithms, 
         DBMS, Operating System.
        <br />
        <br />
        <h2>Technical Rounds:</h2>
        <br />
        To clear this round you should be clear with your basics. You should be prepared
        with Data structures and Algorithms, DBMS, Operating System. Students will be
        expected to write codes in the interview. 
        <br/>They also ask questions from resume. They frequently ask questions about your
        previous projects. You may be asked puzzles in this round.
        <br />
        <br />
        <h2>Tips:</h2>
        <br />
        <li>• Try to be as interactive with interviewers as possible.</li>
        <li>• Before you start writing code, tell them what are all the possible solutions 
          and which one you are choosing and why.</li>
        <li>• Don’t mention that you don’t know.</li>
        <br />
        <br />
        <h2>HR Round :</h2>
        <br />
        You can expected general HR questions like :
        <li>• Tell me about Yourself</li>
        <li>• Why Capgemini?</li>
        <li>• How you see yourself after five years from now?</li>
        <li>• What are your strengths and weaknesses</li>
        <br />
      </div>
    ),
  },
  {
    id: 9,
    mentors: (
      <div className="all-mentors-cards">
        <Mentors
          name="Yash Suri"
          img={yashS}
          link="https://www.linkedin.com/in/yashsuri23/"
        />
        <Mentors
          name="Shruti Singh"
          img={ss}
          link="https://www.linkedin.com/in/shruti-singh-7ba9031b1/"
        />
      </div>
    ),
    company: "Accenture",
    cover: IMG9,
    alum__img: "",
    alum__name: "",
    alum__link: "",
    about: (
      <div>
        Accenture is a multinational management consulting, technology services
        and outsourcing company. It is located in Dublin, Ireland and was
        founded in 1989. Accenture is a Dublin-based company that specializes in
        offering professional services in business strategy, consulting,
        digital, technology, and operations. Each service has various
        technologies and employees dedicated to it.
      </div>
    ),
    jd: "Software Engineer & Senior Analyst",
    process: (
      <div>
        <h2>Cognitive Ability and Technical Assessment :</h2>
        <br />
        This is the most important round in the Accenture test 2023. In this
        round most of the students will get eliminated and can’t reach to the
        next round i.e coding round. This includes: <br />
        <i>
        English Ability <br />
        Analytical Reasoning <br />
        Numerical Ability
        </i>
        <br />
        <br />
        <h2>Coding Round:</h2>
        <br />
        Score of the Coding round is considered at the final round i.e Interview
        process. In this round there are 2 coding questions that can need to be
        solved in 45min.
        <br />
        <br />
        <h2>Communication Assessment Round :</h2>
        <br />
        It is a 20 min verbal test that will assess you on the below parameters:{" "}
        <br /><i>
        Sentence Mastery <br /> Vocabulary <br /> Fluency <br /> Pronunciation</i>
        <br />
      </div>
    ),
  },
];
