import CourseFooter from "$components/CourseFooter";
import Navbar from "$components/Navbar";
import type { NextPage } from "next";
import Head from "next/head";

const CreateCourse: NextPage = () => {
  return (
    <>
      <Head>
        <title>Afriverse</title>
        <meta
          name="description"
          content="Afriverse - web3 education for africans by africans"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="home-header">
        <Navbar />
      </header>
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "260px 720px",
          gridGap: "50px",
          paddingTop: "67px",
        }}
      >
        <aside>
          {/* single section */}
          <div>
            <div
              style={{
                textTransform: "uppercase",
                fontSize: "24px",
                lineHeight: "27.48px",
                fontWeight: 500,
                marginBottom: "12px",
              }}
            >
              Plan your Course
            </div>
          </div>
        </aside>
        <main>
          {/* course landing started */}
          <div
            className="title-font"
            style={{
              fontSize: "28px",
              lineHeight: "33.6px",
              marginBottom: "1.5rem",
            }}
          >
            Course Landing
          </div>
          <div className="title-font" style={{ marginBottom: "10px" }}>
            Course Title
          </div>
          <div>
            <input
              className="quick-input"
              type="text"
              placeholder="Insert your course title"
            />
          </div>
          <div className="title-font" style={{ marginBottom: "10px" }}>
            Course Description
          </div>
          <div>
            <textarea
              className="quick-input"
              name="description"
              id="description"
              rows={10}
              placeholder="Insert your course description"
            ></textarea>
          </div>
          <div className="title-font" style={{ marginBottom: "10px" }}>
            Cover Image
          </div>
          <div>
            <div
              style={{
                border: "1px dashed #1F1F1F",
                height: "358px",
                marginBottom: "45px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#D9D9D9",
                  border: "14px solid white",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Click{" "}
                <button
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    color: "rgba(38,100,221, 0.87)",
                    fontSize: "16px",
                  }}
                >
                  here
                </button>{" "}
                to upload image
                <input style={{ display: "none" }} type="file" />
              </div>
            </div>
          </div>
          {/* course landing ended */}
          {/* course structure started */}
          {/* course structure ended */}
          {/* course video upload started */}
          {/* course video upload ended */}
        </main>
      </div>
      <CourseFooter percent={0} />
    </>
  );
};

export default CreateCourse;
