import React from "react";
import "./Portfolio.css"
import Project from "./Project";

export default function Portfolio() {
    return (
        <section>
        <div className="projects">
        <Project title="Mini Games" gitHub="https://github.com/NebiatHNana/team-5" imgUrl="/assets/minigames.jpeg"/>
        <Project title="Weather Dashboard" gitHub="https://github.com/NebiatHNana/weather-dashboard" url="https://nebiathnana.github.io/weather-dashboard/" imgUrl="/assets/weather-app.png"/>
        <Project title="Work Day Scheduler" gitHub="https://github.com/NebiatHNana/workday-scheduler" url="https://nebiathnana.github.io/workday-scheduler/" imgUrl="/assets/workday-scheduler.png"/>
        <Project title="Code Quiz" gitHub="https://github.com/NebiatHNana/timed-quiz" url="https://nebiathnana.github.io/timed-quiz/" imgUrl="/assets/code-quiz.png"/>
        <Project title="Run Buddy" gitHub="https://github.com/NebiatHNana/Run-Buddy" url="https://nebiathnana.github.io/Run-Buddy/" imgUrl="/assets/runbuddy.png"/>
        <Project title="Password Generator" gitHub="https://github.com/NebiatHNana/password-generator" url="https://nebiathnana.github.io/password-generator/" imgUrl="/assets/password.png"/>
        </div>
        </section>
    );
}
