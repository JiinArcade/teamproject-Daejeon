import React from "react";
import "./BulletinBoard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const BulletinBoard = () => {
  return (
    <div className="BulletinBoard-wrapper">
      <div className="BulletinBoard-box-wrap">
        <div className="Box-Tag3">
          <p>게시판안내</p>
        </div>
        <div className="BulletinBoard-Inner-wrapper">
          <div className="BulletinBoard-box-inner-left">
            <ul className="BulletinBoard-box-title">
              <p>
                소통공간, <strong> 대전과 함께!</strong>
              </p>

              <p>
                시민들의 목소리를 <strong>경청하는 대전</strong>!
              </p>
            </ul>

            <ul className="BulletinBoard-tag-inner">
              <p>
                <li>칭찬합니다</li> <li>다양한질문</li>
              </p>
              <p>
                <li>문의합니다</li> <li>해주세요</li>
              </p>
              <h1 className="notice-human">
                <img src={"/img/notice-human.png"} alt="민원게시판 일러스트" />
              </h1>
              <Link to="/goBulletinBoard">
                <button>게시글 작성하러 가기</button>
              </Link>
            </ul>
          </div>
          <div className="BulletinBoard-box-inner-right">
            <div className="BulletinBoard-InnerTop">
              <div className="BulletinBoard-ListBox">
                <div className="BulletinBoard-ListBox-inner">
                  <ul>
                    <span>조회수 높은 글</span>
                    <span>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="faArrowUpRightFromSquare"
                      />
                    </span>
                  </ul>
                  <ul>
                    <li>칭찬합니다</li>
                    <li>급행1번 버스기사님</li>
                  </ul>
                </div>
              </div>
              <div className="BulletinBoard-ListBox">
                <div className="BulletinBoard-ListBox-inner">
                  <ul>
                    <span>조회수 높은 글</span>
                    <span>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="faArrowUpRightFromSquare"
                      />
                    </span>
                  </ul>
                  <ul>
                    <li>칭찬합니다</li>
                    <li>급행1번 버스기사님</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="BulletinBoard-InnerBottom">
              <div className="BulletinBoard-ListBox">
                <div className="BulletinBoard-ListBox-inner">
                  <ul>
                    <span>조회수 높은 글</span>
                    <span>
                      <FontAwesomeIcon
                        icon={faArrowUpRightFromSquare}
                        className="faArrowUpRightFromSquare"
                      />
                    </span>
                  </ul>
                  <ul>
                    <li>칭찬합니다</li>
                    <li>급행1번 버스기사님</li>
                  </ul>
                </div>
              </div>
              <div className="BulletinBoard-ListBox">
                <div className="BulletinBoard-ListBox-inner">
                  <div className="BulletinBoard-ListBox-inner">
                    <ul>
                      <span>조회수 높은 글</span>
                      <span>
                        <FontAwesomeIcon
                          icon={faArrowUpRightFromSquare}
                          className="faArrowUpRightFromSquare"
                        />
                      </span>
                    </ul>
                    <ul>
                      <li>칭찬합니다</li>
                      <li>급행1번 버스기사님</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulletinBoard;
