import "../style/about.css";
import { Progress, Card, Row } from "antd";
const { Meta } = Card;
import { GithubIcon } from "../icons/githubIcon";
// 定义一个数组，存储你的擅长技能的名称和百分比
const skills = [
    { name: "React", percent: 65 },
    { name: "JavaScript", percent: 60 },
    { name: "HTML/CSS", percent: 50 },
    { name: "TypeScript", percent: 60 },
    { name: "Node.js", percent: 50 },
    { name: "Express.js", percent: 40 },
    { name: "vue2/3", percent: 68 },
    { name: "java", percent: 40 },
    { name: "MySQL", percent: 40 },
    { name: "MongoDB", percent: 48 },
    { name: "python", percent: 45 },
    { name: "C++", percent: 56 },
    { name: "qt", percent: 50 }
];
const conicColors = { '0%': '#C1BFBF', '50%': '#f1356d', '100%': '#eded0a' };
// 定义一个数组，存储你的其它项目的名称、描述、图片和链接
const projects = [
    {
        name: "vagmr-Event",
        description: "一个用vue3构建的简单事件管理系统",
        image: "https://api.iconify.design/logos:vue.svg",
        link: "https://cva.vagmrgpt.top/",
    },
    {
        name: "vagmr的小站",
        description: "一个使用全新构建工具valaxy的个人博客",
        image: "https://iili.io/J37hRGp.png",
        link: "https://blog.vagmrgpt.top/",
    },
    {
        name: "myGuestBook",
        description: "简单使用markdown构建的留言板，用于记录生活中的点点滴滴",
        image: "https://api.iconify.design/devicon:markdown.svg",
        link: "https://vagmr.github.io/Guestbook/",
    },
    {
        name: "fakeApi",
        description: "使用nodejs和express构建的简单的api接口",
        image: "https://api.iconify.design/devicon:express.svg",
        link: "https://fakeapi.vagmrgpt.top/",
    },
];

const AboutMe = () => {

    return (
        <div className="aboutMe">

            <h1>关于我</h1>
            <a href="https://github.com/vagmr" className="github"><GithubIcon></GithubIcon></a>
            <img src="https://iili.io/J9BjFkb.jpg" alt="vagmr" />
            <p className="desc">这是关于我的页面,很高兴认识你，我是<span>vagmr</span></p>
            <p className="desc">我是一名<span> React</span>开发者，喜欢编程和学习新技术</p>
            <div className="skill">
                <h2>我的技能</h2>
                {/* 使用 map 来遍历 skills 数组，并为每个元素创建一个进度条 */}
                {skills.map((skill) => (
                    <Progress
                        key={skill.name}
                        type="circle"
                        percent={skill.percent}
                        format={(percent) => `${skill.name}  ${percent}% `}
                        className="skill-progress"
                        strokeColor={conicColors}
                        size={130}
                    />
                ))}
            </div>
            <div className="project">
                <h2>其它项目</h2>
                {/* 使用 map 来遍历 projects 数组，并为每个元素创建一个卡片 */}
                <Row>
                    {projects.map((project) => (
                        <Card
                            key={project.name}
                            hoverable
                            style={{ width: 240 }}
                            cover={<img alt={project.name} src={project.image} />}
                        >
                            <Meta
                                title={project.name}
                                className="project-meta"
                                description={
                                    <>
                                        <p>{project.description}</p>
                                        <a href={project.link}>查看详情</a>
                                    </>
                                }
                            />
                        </Card>
                    ))}
                </Row>
            </div>
            <p>
                如果你想了解更多关于我的信息，请访问我的
                <a href="https://vagmr.com">个人网站</a>或者关注我的
                <a href="https://twitter.com/">Twitter</a>
            </p>
        </div>
    );
};

export default AboutMe;
