import React from "react";
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="startheader">
            <img
              src="assets/images/fb-logo.png"
              alt="fblogo"
              width="35px"
              height="35px"
            />
            <div className="searchbox">
              <span className="material-symbols-outlined">search</span>
              <input type="text" placeholder="search facebook" />
            </div>
          </div>

          <div className="middleheader">
            <div className="icon1">
              <span className="material-symbols-outlined" id="ico1">
                home
              </span>
            </div>
            <div className="icon2">
              <span className="material-symbols-outlined" id="ico2">
                flag
              </span>
            </div>
            <div className="icon3">
              <span className="material-symbols-outlined" id="ico3">
                subscriptions
              </span>
            </div>
            <div className="icon4">
              <span className="material-symbols-outlined" id="ico4">
                home_app_logo
              </span>
            </div>
            <div className="icon5">
              <span className="material-symbols-outlined" id="ico5">
                person_add
              </span>
            </div>
          </div>

          <div className="endheader">
            <div className="myprofile">
              <img
                src="assets/images/avatar.png"
                id="avtar1"
                alt="avatar"
                width="35px"
                height="35px"
              />
              <span>Sidhant</span>
            </div>
            <div className="endicons">
              <div id="icon01">
                <span className="material-symbols-outlined">add</span>
              </div>
              <div className="icon02">
                <span className="material-symbols-outlined">forum</span>
              </div>
              <div className="icon03">
                <span className="material-symbols-outlined">
                  notifications_active
                </span>
              </div>
              <div className="icon04">
                <span className="material-symbols-outlined">
                  arrow_drop_down
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* header complete */}
        <div className="main_body">
          <div className="sidebar">
            <div className="sidebarrow">
              <img
                src="assets/images/avatar.png"
                alt="."
                height="35px"
                width="35px"
              />
              <h4>Sidhant's Account</h4>
            </div>
            <div className="sidebarrow">
              <span className="material-symbols-outlined">local_hospital</span>
              <h4>Nearby Hospitals</h4>
            </div>
            <div className="sidebarrow">
              <span className="material-symbols-outlined">flag_circle</span>
              <h4>Pages</h4>
            </div>
            <div className="sidebarrow">
              <span className="material-symbols-outlined">group_add</span>
              <h4>People</h4>
            </div>
            <div className="sidebarrow">
              <span className="material-symbols-outlined">chat</span>
              <h4>Messages</h4>
            </div>
          </div>
          {/* leftsidebar ends */}
          <div className="middlebody">
            <div className="storyreel"></div>
            {/* post */}
            <div
              id="post"
              style={{
                margin: "15px",
                padding: "10px",
                backgroundColor: "#e3e9ef",
                borderRadius: "10px",
              }}
            >
              <div id="info">
                <div
                  className="myprofile"
                  style={{ display: "flex", justifyContent: "left" }}
                >
                  <img
                    src="assets/images/mypic.jpg"
                    width="35px"
                    height="35px"
                    style={{ borderRadius: "50%" }}
                  />
                  <p>Sidhant</p>
                </div>
              </div>
              <div id="image">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="assets/images/mypic2.jpg"
                    height="530px"
                    width="450px"
                    alt="Post"
                    style={{ borderRadius: "10px" }}
                  />
                </div>
              </div>
              <div id="end" style={{ margin: "15px", padding: "10px" }}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    borderTop: "2px solid black",
                  }}
                >
                  <span
                    id="like"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span className="material-symbols-outlined"> thumb_up</span>
                    <p>like</p>
                  </span>
                  <span
                    id="comment"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span className="material-symbols-outlined"> comment </span>
                    <p>Comment</p>
                  </span>
                  <span
                    id="share"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span className="material-symbols-outlined"> send</span>
                    <p>Send</p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* middlebody end */}
          <div className="endbar">
            <div
              className="sideimg"
              style={{
                backgroundImage: `url(picimp.webp)`,
                width: "180px",
                height: "150px",
              }}
            >
              <div className="sidefb">
                <span>Facebook</span>
                <span style={{ fontSize: "small" }}>2.1M likes</span>
              </div>
            </div>

            <div className="endbarcontent">
              <p>
                In response to the COVID-19 pandemic, recently 194 member states
                of the World Health Organization began negotiations on an
                International Treaty on Pandemic Prevention, Preparedness and
                Response with a requirement to submit a draft of this treaty to
                the 77th World Health Assembly during its 2024 convention. This
                is expected to set rules for dealing with a pandemic by the
                international community.[10][11]
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
