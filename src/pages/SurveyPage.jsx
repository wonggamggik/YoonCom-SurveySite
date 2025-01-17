import { Link } from "react-router-dom";
import "../assets/Survey.css";
import survey_image from "../assets/rck-image.png";

export default function SurveyPage() {
  return (
    <div className="surveyPage">
      <div className="nav">
        <div className="nav-current"></div>
      </div>
      <div className="survey">
        <div className="survey-conetnts">
          <div className="introduction">
            <div className="image"></div>
            <div>
              <h1>온라인 레퍼런스 체크</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          {/* 지원자와의 관계 */}
          <div className="content descriptive">
            <div>
              <div>
                <h2>지원자와의 관계</h2>
                <p>지원자와의 관계를 말씀해 주세요.</p>
              </div>
              <div>
                <textarea></textarea>
              </div>
            </div>
          </div>
          {/* 주요 역할과 성과 */}
          <div className="content descriptive">
            <div>
              <div>
                <h2>주요 역할과 성과</h2>
                <p>지원자의 주요 역할과 성과를 말씀해 주세요.</p>
              </div>
              <div>
                <textarea></textarea>
              </div>
            </div>
          </div>
          {/* 장점 및 단점 */}
          <div className="content descriptive">
            <div>
              <div>
                <h2>장점 및 단점</h2>
                <p>지원자의 장점 및 단점을 말씀해 주세요.</p>
              </div>
              <div>
                <textarea></textarea>
              </div>
            </div>
          </div>
          {/* 직무/성격상 아쉬웠던 점 */}
          <div className="content descriptive">
            <div>
              <div>
                <h2>직무/성격상 아쉬웠던 점</h2>
                <p>
                  함께 근무하면서 직무, 성격상의 아쉬웠던 점을 말씀해 주세요.
                </p>
              </div>
              <div>
                <textarea></textarea>
              </div>
            </div>
          </div>
          {/* 리더십 측면 */}
          <div className="content check">
            <div>
              <h2>리더십 측면</h2>
              <p>리더십 측면에서 공감되는 문장들을 선택해 주세요.</p>
            </div>
            <div>
              <div>
                <input type="checkbox" id="leadership-1" />
                <label for="leadership-1">
                  목표 달성을 위해 팀원 또는 주변사람을 이끌며 점진적인 리더십을
                  발휘함
                </label>
              </div>

              <div>
                <input type="checkbox" id="leadership-2" />
                <label for="leadership-2">
                  분석한 결과를 중심으로 최대한 합리적으로 업무를 처리하려고 함
                </label>
              </div>

              <div>
                <input type="checkbox" id="leadership-3" />
                <label for="leadership-3">
                  식사나 회식 등 사교적인 자리를 주최하는 것에 어려움이 없음
                </label>
              </div>

              <div>
                <input type="checkbox" id="leadership-4" />
                <label for="leadership-4">
                  현장 장악력이 높고 강력한 의견 또는 지시 사항을 부여함
                </label>
              </div>

              <div>
                <input type="checkbox" id="leadership-5" />
                <label for="leadership-5">
                  혁신과 효율을 추구하며 개방적인 마인드를 가지고 있음
                </label>
              </div>

              <div>
                <input type="checkbox" id="leadership-6" />
                <label for="leadership-6">
                  내부 소통이 원만하여 상사 및 부하 직원 모두에게 고른 평판을
                  가지고 있음
                </label>
              </div>

              <div>
                <input type="checkbox" id="leadership-7" />
                <label for="leadership-7">
                  개인의 성과보다 공동의 성과를 추구함
                </label>
              </div>

              <div>
                <input type="checkbox" id="leadership-8" />
                <label for="leadership-8">
                  가급적 부하들의 의견을 수렴함. 단, 조직 장악력과 카리스마는
                  부족할 수 있음
                </label>
              </div>

              <div>
                <input type="checkbox" id="leadership-9" />
                <label for="leadership-9">권위와 위계질서를 앞세움</label>
              </div>

              <div>
                <input type="checkbox" id="leadership-10" />
                <label for="leadership-10">
                  팀원들의 업무를 밀접하게 확인하려는 경향이 있음
                </label>
              </div>

              <div>
                <input type="checkbox" id="leadership-11" />
                <label for="leadership-11">
                  개인 성향이 짙으며 자기 중심적으로 조직을 이끌어 감
                </label>
              </div>

              <div>
                <input type="checkbox" id="leadership-12" />
                <label for="leadership-12">
                  의견이나 지시 전달이 일관적이지 않고 변화가 잦음
                </label>
              </div>

              <div>
                <input type="checkbox" id="leadership-13" />
                <label for="leadership-13">
                  관리 경험이 부족하며 업무적으로도 팀원들을 장악하지 못함
                </label>
              </div>

              <div>
                <input type="checkbox" id="leadership-14" />
                <label for="leadership-14">
                  조직 또는 프로젝트를 관리하기에 역량이 부족한 담당자
                </label>
              </div>

              <div>
                <input type="checkbox" id="leadership-15" />
                <label for="leadership-15">
                  지시 방식이 일방적이며 이의를 제기하는 직원을 좋게 보지 않음
                </label>
              </div>

              <div>
                <input type="checkbox" id="leadership-16" />
                <label for="leadership-16">
                  자력으로 리더의 위치까지 오르지 못했으며 리더로서 무능하다고
                  생각함
                </label>
              </div>

              <div>
                <input type="checkbox" id="leadership-17" />
                <label for="leadership-17">
                  상사에게는 유연하고 부하들에게는 엄격한 리더
                </label>
              </div>

              <div>
                <input type="checkbox" id="leadership-18" />
                <label for="leadership-18">
                  리더십과 개인 역량 모두 부족한 관리자
                </label>
              </div>

              <div>
                <input type="checkbox" id="leadership-19" />
                <label for="leadership-19">공감되는 문장 없음</label>
              </div>
            </div>
          </div>
          {/* 협업/커뮤니케이션 1 */}
          <div className="content check">
            <div>
              <h2>협업/커뮤니케이션(1)</h2>
              <p>
                협업/커뮤니케이션에 대하여 공감되는 문장들을 선택해주십시오.
              </p>
            </div>
            <div>
              <div>
                <input type="checkbox" id="communication1-1" />
                <label for="communication1-1">
                  업무 처리 중 발생한 문제점을 빠르게 파악하여 문제를 해결하는
                  데 적극적으로 노력함
                </label>
              </div>

              <div>
                <input type="checkbox" id="communication1-2" />
                <label for="communication1-2">
                  업무에 대한 적극적인 태도와 열정적인 모습을 보임
                </label>
              </div>

              <div>
                <input type="checkbox" id="communication1-3" />
                <label for="communication1-3">
                  절차와 체계를 가장 중요하게 여기기 때문에 상대적으로 유연성은
                  떨어짐
                </label>
              </div>

              <div>
                <input type="checkbox" id="communication1-4" />
                <label for="communication1-4">
                  모든 구성원에게 도움이 된다면 자신이 습득한 지식 또는 정보를
                  투명하게 공유함
                </label>
              </div>

              <div>
                <input type="checkbox" id="communication1-5" />
                <label for="communication1-5">
                  타인의 방향성과 아이디어가 더 좋다면 개인의 의견이나 주장을
                  양보할 수 있음
                </label>
              </div>

              <div>
                <input type="checkbox" id="communication1-6" />
                <label for="communication1-6">
                  직접적인 리더십을 발휘하기보다 일원으로서 리더를 동조하고 전체
                  흐름을 따르는 편
                </label>
              </div>

              <div>
                <input type="checkbox" id="communication1-7" />
                <label for="communication1-7">
                  공과 사가 뚜렷하며 근거와 데이터를 중심으로 소통함
                </label>
              </div>

              <div>
                <input type="checkbox" id="communication1-8" />
                <label for="communication1-8">
                  확실한 목표의식과 근거를 제시하며 공격적으로 상황을 이끌어 감
                </label>
              </div>

              <div>
                <input type="checkbox" id="communication1-9" />
                <label for="communication1-9">
                  분쟁이나 의견 마찰 상황에서 먼저 나서서 교통정리 함
                </label>
              </div>

              <div>
                <input type="checkbox" id="communication1-10" />
                <label for="communication1-10">공감되는 문장 없음</label>
              </div>
            </div>
          </div>
          {/* 협업/커뮤니케이션 2 */}
          <div className="content check">
            <div>
              <h2>협업/커뮤니케이션(2)</h2>
              <p>
                협업/커뮤니케이션에 대하여 공감되는 문장들을 선택해주십시오.
              </p>
            </div>
            <div>
              <div>
                <input type="checkbox" id="communication2-1" />
                <label for="communication2-1">
                  업무를 칼같이 구분하고 범위 이상의 협조와 협동은 배척하는 유형
                </label>
              </div>

              <div>
                <input type="checkbox" id="communication2-2" />
                <label for="communication2-2">
                  부서나 자신의 입장 또는 이득을 우선하기에 같은 팀에 있으면
                  좋지만 반대의 경우는 부담스러움
                </label>
              </div>

              <div>
                <input type="checkbox" id="communication2-3" />
                <label for="communication2-3">
                  대립이나 분쟁 상황을 어려워하며 거의 항상 중립적인 위치에 있음
                </label>
              </div>

              <div>
                <input type="checkbox" id="communication2-4" />
                <label for="communication2-4">
                  자신의 주력분야가 아니면 크게 관심을 갖지 않음
                </label>
              </div>

              <div>
                <input type="checkbox" id="communication2-5" />
                <label for="communication2-5">
                  필요한 내용은 전달하고 소통할 수 있으나 소극적인 성향이 강해
                  어느 정도 개선이 필요해 보임
                </label>
              </div>

              <div>
                <input type="checkbox" id="communication2-6" />
                <label for="communication2-6">
                  추진력은 좋으나 공격적 성향이 강하며 타협이 쉽지 않음
                </label>
              </div>

              <div>
                <input type="checkbox" id="communication2-7" />
                <label for="communication2-7">
                  전반적인 업무 이해도가 떨어지기 때문에 협업하기에 불편했음
                </label>
              </div>

              <div>
                <input type="checkbox" id="communication2-8" />
                <label for="communication2-8">
                  개인의 우선 업무를 먼저 생각하기에 협조를 구하기 어려웠음
                </label>
              </div>

              <div>
                <input type="checkbox" id="communication2-9" />
                <label for="communication2-9">
                  중립을 지키기 때문에 분쟁 해결과 조율 과정은 무난하지만
                  개인이나 프로젝트의 발전 잠재력은 떨어짐
                </label>
              </div>

              <div>
                <input type="checkbox" id="communication2-10" />
                <label for="communication2-10">
                  개인주의가 강하여 협동을 기대하기는 어려움
                </label>
              </div>

              <div>
                <input type="checkbox" id="communication2-11" />
                <label for="communication2-11">공감되는 문장 없음</label>
              </div>
            </div>
          </div>
          {/* 평소 전문성 */}
          <div className="content check">
            <div>
              <h2>평소 전문성</h2>
              <p>평소 전문성에 대하여 공감되는 문장들을 선택해주십시오.</p>
            </div>
            <div>
              <div>
                <input type="checkbox" id="expertise-1" />
                <label for="expertise-1">
                  역량 강화를 위해 지속적으로 학습하고 새로운 아이디어나 기술을
                  업무에 적용할 수 있음
                </label>
              </div>

              <div>
                <input type="checkbox" id="expertise-2" />
                <label for="expertise-2">
                  문제 발생 시 빠르게 대처하여 상황을 개선시킬 수 있음
                </label>
              </div>

              <div>
                <input type="checkbox" id="expertise-3" />
                <label for="expertise-3">
                  문서를 통한 의사 전달에서 호소력을 느낄 수 있고 근거나 배경
                  조사가 매우 논리적임
                </label>
              </div>

              <div>
                <input type="checkbox" id="expertise-4" />
                <label for="expertise-4">
                  네이티브 수준의 영어 실력을 가지고 있으며 글로벌 업무에 전혀
                  차질이 없음
                </label>
              </div>

              <div>
                <input type="checkbox" id="expertise-5" />
                <label for="expertise-5">
                  고객, 시장, 경쟁사 등 사업 주변 환경에 대한 정보 확인이 빠르며
                  이에 대한 통찰력을 보유함
                </label>
              </div>

              <div>
                <input type="checkbox" id="expertise-6" />
                <label for="expertise-6">
                  적절한 고객 대응은 가능하나 강성 고객이나 어려운 상황을 스스로
                  처리하는 요령은 부족함
                </label>
              </div>

              <div>
                <input type="checkbox" id="expertise-7" />
                <label for="expertise-7">
                  고객 응대를 다소 무뚝뚝하게 하는 편
                </label>
              </div>

              <div>
                <input type="checkbox" id="expertise-8" />
                <label for="expertise-8">
                  업무 처리는 가능하나 실무와 관련된 기술적, 학문적, 응용 지식은
                  보완이 필요함
                </label>
              </div>

              <div>
                <input type="checkbox" id="expertise-9" />
                <label for="expertise-9">
                  업무 지식은 확실하나 트렌드, 신규 정보 등 주변 지식에 대한
                  모니터링은 부족함
                </label>
              </div>

              <div>
                <input type="checkbox" id="expertise-10" />
                <label for="expertise-10">
                  직무에 대한 전문성과 몰입감이 강하나 본인 영역에만 매몰된
                  경향이 있음
                </label>
              </div>

              <div>
                <input type="checkbox" id="expertise-11" />
                <label for="expertise-11">
                  잔실수 등 업무 디테일이 다소 약한 점이 아쉬움
                </label>
              </div>

              <div>
                <input type="checkbox" id="expertise-12" />
                <label for="expertise-12">공감되는 문장 없음</label>
              </div>
            </div>
          </div>
          {/* 평소 인성 */}
          <div className="content check">
            <div>
              <h2>평소 인성</h2>
              <p>평소 인성에 대해 공감되는 문장들을 선택해주십시오.</p>
            </div>
            <div>
              <div>
                <input type="checkbox" id="personality-1" />
                <label for="personality-1">
                  맡은 업무에 대한 책임감이 투철하며 최종 단계까지 집중하는
                  모습을 보임
                </label>
              </div>

              <div>
                <input type="checkbox" id="personality-2" />
                <label for="personality-2">
                  주변이 변화가 있거나 개인의 감정이 불안정한 상황이라도 근무
                  태도만큼은 성실했음
                </label>
              </div>

              <div>
                <input type="checkbox" id="personality-3" />
                <label for="personality-3">
                  거짓이나 숨김이 없이 바르게 행동하는 사람
                </label>
              </div>

              <div>
                <input type="checkbox" id="personality-4" />
                <label for="personality-4">
                  도덕적, 윤리적으로 결함이 전혀 없음
                </label>
              </div>

              <div>
                <input type="checkbox" id="personality-5" />
                <label for="personality-5">
                  준법정신이 투철한 사람으로 감사, 인사, 법무 연관 업무와 잘
                  어울림
                </label>
              </div>

              <div>
                <input type="checkbox" id="personality-6" />
                <label for="personality-6">
                  주변 동료를 편애하지 않고 일관적으로 대함
                </label>
              </div>

              <div>
                <input type="checkbox" id="personality-7" />
                <label for="personality-7">
                  사교적이고 활발하며 주변 인맥이 풍부함
                </label>
              </div>

              <div>
                <input type="checkbox" id="personality-8" />
                <label for="personality-8">
                  신중히 생각한 다음 발언하는 경향이 있고 평소 행동도 사려 깊음
                </label>
              </div>

              <div>
                <input type="checkbox" id="personality-9" />
                <label for="personality-9">
                  부서 분위기가 무거운 경우 재치 있는 농담이나 화제 전환을 통해
                  분위기를 환기시킬 수 있음
                </label>
              </div>

              <div>
                <input type="checkbox" id="personality-10" />
                <label for="personality-10">
                  감정 컨트롤이 안 돼 잘 삐치거나 스트레스를 표출하여 주변
                  사람들을 힘들게 함
                </label>
              </div>

              <div>
                <input type="checkbox" id="personality-11" />
                <label for="personality-11">
                  감정적으로 기복이 있어 주변 사람들에게 불안감을 느끼게 함
                </label>
              </div>

              <div>
                <input type="checkbox" id="personality-12" />
                <label for="personality-12">
                  매사 걱정이 많아 새로운 일을 맡는 것을 두려워하고, 조금만
                  문제가 생겨도 크게 걱정을 함
                </label>
              </div>

              <div>
                <input type="checkbox" id="personality-13" />
                <label for="personality-13">
                  인내심이 부족해서 바로 성과가 나오지 않으면 쉽게 포기하는
                  경향이 있음
                </label>
              </div>

              <div>
                <input type="checkbox" id="personality-14" />
                <label for="personality-14">
                  자신보다 나은 동료를 위협으로 받아들이고 감정적, 배타적으로
                  대함
                </label>
              </div>

              <div>
                <input type="checkbox" id="personality-15" />
                <label for="personality-15">
                  너무 말이 많아서 주변 사람들을 지치게 함
                </label>
              </div>

              <div>
                <input type="checkbox" id="personality-16" />
                <label for="personality-16">
                  자신보다 뛰어난 사람들을 경쟁자로 여기거나 위협으로 받아들임
                </label>
              </div>

              <div>
                <input type="checkbox" id="personality-17" />
                <label for="personality-17">
                  다른 사람의 실수를 지나치게 비판적으로 대하고 비난하는 경향이
                  강함
                </label>
              </div>

              <div>
                <input type="checkbox" id="personality-18" />
                <label for="personality-18">
                  건설적인 비판을 듣기 싫어하고 자신을 옹호하고 방어하기 바쁨
                </label>
              </div>

              <div>
                <input type="checkbox" id="personality-19" />
                <label for="personality-19">
                  자신에게 도움이 안 되는 사람이나 일에 대해서는 무관심을 보임
                </label>
              </div>

              <div>
                <input type="checkbox" id="personality-20" />
                <label for="personality-20">공감되는 문장 없음</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
