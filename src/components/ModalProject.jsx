import React from "react";
import styled from "styled-components";
import { ProjectData } from "../assets/projectData"; // project 정보

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  @media screen and (max-width: 769px) {
    width: 100%;
  }
  @media screen and (max-width: 390px) {
  }
`;

const Inner = styled.div`
  width: 50%;
  max-width: 850px;
  height: 550px;
  background: ${(props) => props.theme.bgColor};
  border-radius: 8px;
  text-align: center;
  display: flex;
  align-items: center;
  @media screen and (max-width: 769px) {
    width: 90%;
  }
  @media screen and (max-width: 390px) {
    width: 90%;
    height: 300px;
  }
`;

const ProjectWrap = styled.div`
  display: flex;
  padding: 0 30px;
  .projectItem {
    display: flex;
    align-items: center;
    margin-left: 10px;
    @media screen and (max-width: 390px) {
      width: 85%;
      display: flex;
      justify-content: center;
    }
  }
`;

const DataWrap = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  margin-right: 30px;
  @media screen and (max-width: 390px) {
    margin-right: 10px;
  }
  img {
    width: 300px;
    height: 400px;
    @media screen and (max-width: 390px) {
      width: 150px;
      height: 250px;
    }
  }
`;

const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media screen and (max-width: 390px) {
    gap: 10px;
  }
`;

const ProjectDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media screen and (max-width: 390px) {
    gap: 10px;
  }
`;

const Name = styled.span`
  font-size: 32px;
  font-weight: bold;
  display: flex;
  @media screen and (max-width: 390px) {
    font-size: 18px;
  }
`;

const Git = styled.p`
  width: 100%;
  font-size: 20px;
  display: flex;
  @media screen and (max-width: 390px) {
    font-size: 14px;
  }
`;

const Final = styled.p`
  width: 100%;
  font-size: 20px;
  display: flex;
  @media screen and (max-width: 390px) {
    font-size: 14px;
  }
`;

const Desc = styled.span`
  width: 22%;
  font-size: 20px;
  @media screen and (max-width: 390px) {
    font-size: 14px;
    width: 25%;
  }
`;
const Skill = styled.span`
  width: 100%;
  margin-top: 80px;
  font-size: 20px;
  border-radius: 8px;
  padding: 6px 8px;
  border: 1px solid #ccc;
  @media screen and (max-width: 390px) {
    font-size: 12px;
    margin-top: 35px;
    width: 100%;
    border: 1px solid ${(props) => props.theme.borderColor};
    color: ${(props) => props.theme.borderColor};
  }
`;

const CloseBtn = styled.div`
  border: none;
  position: absolute;
  right: 29%;
  bottom: 25%;
  @media screen and (max-width: 769px) {
    right: 8%;
    bottom: 23%;
  }
  @media screen and (max-width: 390px) {
    right: 8%;
    bottom: 32%;
  }
  button {
    border: none;
    width: 70px;
    height: 35px;
    border-radius: 20px;
    background: ${(props) => props.theme.btnColor};
    color: ${(props) => props.theme.btnTextColor};
    @media screen and (max-width: 390px) {
      width: 60px;
      height: 30px;
    }
  }
`;
const ModalProject = ({ project, onClose }) => {
  // - project: 모달에 표시할 프로젝트 데이터 (props로 전달받음)
  // - onClose: 모달 닫기 동작을 처리하는 함수 (props로 전달받음)

  if (!project) return null;
  // project 값이 없으면 (null 또는 undefined) 컴포넌트 렌더링 중단
  // 모달을 열 프로젝트가 선택되지 않았을 때 아무것도 표시하지 않음

  // 선택한 skill에 해당하는 추가 정보 가져오기
  const projectDetails = ProjectData.find((info) => info.id === project.id);
  // ProjectData 배열에서 선택된 project의 id와 일치하는 데이터를 찾음
  // projectDetails는 해당 프로젝트의 상세 정보를 포함

  return (
    <ModalWrapper>
      <Inner>
        <ProjectWrap>
          <div className="projectItem">
            <DataWrap>
              <img src={projectDetails.image} alt={projectDetails.name} />
            </DataWrap>
            <ProjectItem>
              <Name>{projectDetails.name}</Name>
              <ProjectDesc>
                <Git>Git URL: {projectDetails.gitURL}</Git>
                <Final>Final URL: {projectDetails.finalURL}</Final>
                <Desc>{projectDetails.desc}</Desc>
                <Skill>{projectDetails.skill}</Skill>
              </ProjectDesc>
            </ProjectItem>
          </div>
        </ProjectWrap>
        <CloseBtn>
          <button onClick={onClose}>Close</button>
        </CloseBtn>
      </Inner>
    </ModalWrapper>
  );
};

export default ModalProject;
