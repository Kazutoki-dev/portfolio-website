import Image from "next/image";

const Skill = () => {
  const skillDataLeft = [
    {
      imgPath: "/icon/html.png",
      alt: "html",
      skillName: "HTML",
      period: "6ヶ月",
      className: "w-12",
    },
    {
      imgPath: "/icon/css.png",
      alt: "css",
      skillName: "CSS",
      period: "6ヶ月",
      className: "w-12",
    },
    {
      imgPath: "/icon/js.png",
      alt: "js",
      skillName: "Javascript",
      period: "6ヶ月",
      className: "w-12",
    },
    {
      imgPath: "/icon/ts.png",
      alt: "ts",
      skillName: "Typescript",
      period: "3ヶ月",
      className: "w-12",
    },
    {
      imgPath: "/icon/nodejs.png",
      alt: "nodejs",
      skillName: "Node.js",
      period: "6ヶ月",
      className: "w-12",
    },
  ];

  const skillDataRight = [
    {
      imgPath: "/icon/react.png",
      alt: "react",
      skillName: "React",
      period: "3ヶ月",
      className: "w-12",
    },
    {
      imgPath: "/icon/nextjs.png",
      alt: "nextjs",
      skillName: "Next.js",
      period: "3ヶ月",
      className: "w-12",
    },
    {
      imgPath: "/icon/git.png",
      alt: "git",
      skillName: "Git",
      period: "6ヶ月",
      className: "w-12",
    },
    {
      imgPath: "/icon/docker.png",
      alt: "docker",
      skillName: "Docker",
      period: "3ヶ月",
      className: "w-12",
    },
    {
      imgPath: "/icon/figma.png",
      alt: "figma",
      skillName: "Figma",
      period: "3ヶ月",
      className: "w-8 ml-1",
    },
  ];

  return (
    <div
      id="skill"
      className="flex flex-col justify-center items-center content"
    >
      <p className="title text-4xl">SKILL</p>
      {/* スキル表 */}
      <div>
        <div className="flex flex-col md:flex-row justify-center">
          <div className="mx-12">
            <table className="table mx-4">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {skillDataLeft.map((skill, index) => (
                  <tr key={index}>
                    <th>
                      <Image
                        src={skill.imgPath}
                        width={200}
                        height={200}
                        alt={skill.alt}
                        className={skill.className}
                      />
                    </th>
                    <td>{skill.skillName}</td>
                    <td>{skill.period}</td>
                  </tr>
                ))}
                {skillDataRight.map((skill, index) => (
                  <tr key={index} className="md:hidden">
                    <th>
                      <Image
                        src={skill.imgPath}
                        width={200}
                        height={200}
                        alt={skill.alt}
                        className={skill.className}
                      />
                    </th>
                    <td>{skill.skillName}</td>
                    <td>{skill.period}</td>
                  </tr>
                ))}
                <tr className="">
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mx-12 hidden md:block">
            <table className="table mx-4">
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {skillDataRight.map((skill, index) => (
                  <tr key={index}>
                    <th>
                      <Image
                        src={skill.imgPath}
                        width={200}
                        height={200}
                        alt={skill.alt}
                        className={skill.className}
                      />
                    </th>
                    <td>{skill.skillName}</td>
                    <td>{skill.period}</td>
                  </tr>
                ))}

                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <p>※2024年4月時点</p>
    </div>
  );
};
export default Skill;
