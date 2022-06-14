![](https://velog.velcdn.com/images/piouy0/post/6d192d72-9007-4a49-99e0-bd356d4e4e9d/image.png)

## 😋 브라우저란

우리는 html 문서에 html, css 그리고 자바스크립트로 코드를 작성해 웹페이지를 만듭니다. 브라우저는 사용자가 작성한 html 코드를 가지고 웹페이지를 그려줍니다.

### 브라우저 종류

![](https://velog.velcdn.com/images/piouy0/post/893a66cd-d913-4348-a728-8df7d0355cf4/image.webp)

우리가 인터넷에 접속하기 위해 쓰는 브라우저는 크게

-   크롬
-   엣지
-   파이어폭스
-   오페라
-   사파리 등이 있습니다.

브라우저는 html과 css 명세에 따라 html을 표시하는데 html과 css는 웹표준에 따라 명세가 정해집니다.
웹 표준은 팀버너스리를 중심으로 월드 와이드 웹을 위한 표준을 개발하고 장려하는 조직, **W3C**에 의해 개발되었습니다. **웹 표준 도입 전**, 초창기에는 브라우저 별로 뷰가 달라지거나 웹 API 활용 값이 상이한 문제와 같은 **파편화 현상**이 심했습니다.  
2019년이 되어서야 W3C와 WHATWG가 합의해서 HTML을 하나의 버전으로 통합하였습니다.

## 🧐 브라우저의 공통적인 구조

![](https://velog.velcdn.com/images/piouy0/post/ebb12d34-7496-4074-80a2-e6130d7ed9aa/image.png)

하나에 웹페이지를 구성하고 보여주기 위해서는 브라우저가 꽤 많은 일들을 처리를 하는데요. 먼저, 브라우저의 공통적인 구조에 대해서 간단하게 살펴보겠습니다.
크게 7가지로 구성되는데요.

1. User Interface : 주소 표시줄, 이전/다음/새로고침 버튼 등 웹 페이지를 제외하고 사용자와 상호작용 하는 사용자 인터페이스
2. Rendering Engine : HTML과 CSS를 파싱하여 요청한 웹 페이지를 표시하는 렌더링 엔진
3. Browser Engine : 유저 인터페이스와 렌더링 엔진을 연결하는 브라우저 엔진
4. Networking : 각종 네트워크 요청을 수행하는 네트워킹 파트
5. UI Backend : 체크박스나 버튼 등 기본적인 위젯을 그려주는 UI 백엔드 파트
6. Data Persistence : localStorage나 Cookie와 같이 보조 기억장치에 데이터를 저장하는 파트
7. Javascript Interpreter : 자바스크립트 코드를 실행하는 인터프리터 (ex: Chrome은 v8엔진)

이 포스트에서는 렌더링 엔진을 중심으로 다루겠습니다.

## 🙋‍♂️ 웹 브라우저마다 다른 렌더링 엔진

들어가기 앞서, 웹 브라우저마다 렌더링 엔진이 각각 조금씩 다릅니다.

![](https://velog.velcdn.com/images/piouy0/post/275b9221-8d9d-4445-97e9-76c59b4965a3/image.png)
모든 렌더링 엔진이 기본적으로 웹표준을 준수하면서도 엔진마다 조금씩 다르게 동작하는 부분이 있습니다. 이 포스트에서는 크롬을 중심으로 다루겠습니다.

## 🙆‍♂️ Critical Rendering Path

### 렌더링 엔진이 하는 일

> 1. html, css, javascript, img 등 웹페이지에 포함된 모든 요소들을 화면에 보여줍니다.
> 2. 업데이트가 필요할 때, 효율적으로 렌더링을 할 수 있도록 자료 구조를 생성합니다.

![](https://velog.velcdn.com/images/piouy0/post/a3d9cca2-0b4e-46b0-af56-4f1c8055aea2/image.png)

이러한 목표를 위해서 렌더링 엔진은 크게 다음에 과정을 거쳐서 동작을 하는데요. 이미지와 같은 과정을 통틀어 Critical Rendering Path라고 합니다. 그러면 각 과정을 하나씩 알아보겠습니다.

### Build DOM

![](https://velog.velcdn.com/images/piouy0/post/0286eae5-7312-43ee-a963-c1d920ce8a11/image.webp)

먼저 브라우저에서 사용자가 요청한 웹페이지에 문서를 불러오고 파싱을 합니다. 그림과 같이 html 코드는 Tokenizer를 통해 HTML5 표준에 지정된 고유한 토큰으로 변환됩니다.
토큰은 다음 코드와 같이 생겼습니다.

![](https://velog.velcdn.com/images/piouy0/post/58637d92-c8be-42c9-b34a-0f91e44d45b6/image.png)

그리고 브라우저에 렉싱 과정을 통해서 토큰이 해당 속성과 규칙을 정의하는 노드 객체로 변환됩니다.

> -   태그 : element node

-   태그의 요소 : attribute node
-   텍스트 : text node
-   주석 : comment node로 변환되어 되어 Tree 구조로 생성합니다.

![](https://velog.velcdn.com/images/piouy0/post/f877bd17-e3e9-47a8-ac43-b97090b95e36/image.png)

그리고 각 노드가 서로 연관성을 가질 수 있도록 Tree를 생성하는데 이게 바로 DOM Tree입니다.

### CSSOM Tree

![](https://velog.velcdn.com/images/piouy0/post/f80e8a10-93bc-46fd-8813-3adc9305712a/image.png)

브라우저는 HTML문서를 파싱하는 과정에서 자바스크립트나 css같이 추가로 필요한 파일들을 불러오도록 요청하기도합니다. html을 DOM Tree로 만드는 과정과 비슷하게 css로는 CSSOM Tree가 만들어집니다. CSSOM Tree는 어떻게 화면에 표시될 지를 알려주는 역할을 합니다. css도 위에서 아래로 스타일 규칙이 정해지기 때문에 이 또한 Tree구조를 가지고 있습니다.

![](https://velog.velcdn.com/images/piouy0/post/b0eb2a8e-f0ea-4cc3-91bd-77855e4d8162/image.png)

### Syntax Tree - Run JS

자바스크립트는 렌더링 엔진이 아닌 자바스크립트 엔진(Javascript Interpreter 라고도 함.)이 처리합니다.

1. DOM Tree를 build 하면서 script 태그를 만나면 자바스크립트 코드를 실행하기 위해 DOM build 프로세스를 중지하고 자바스크립트 엔진으로 제어 권한을 넘깁니다.
2. 제어 권한을 넘겨 받은 자바스크립트 엔진은 script 태그 내의 자바스크립트 코드 또는 src attribute에 정의된 자바스크립트 파일을 로드하고 파싱하여 실행합니다.
3. 자바스크립트의 실행이 완료되면 다시 html 파서로 제어권한을 넘겨서 브라우저가 중지했던 시점부터 DOM 생성을 재개합니다.

> 🙏 script 태그는 body 요소의 가장 아래에 위치시키는 것이 좋은 아이디어입니다.

1. html요소들이 스크립트 로딩 지연으로 인해 렌더링에 지장 받는 일이 발생하지 않아 페이지 로딩 시간이 단축됩니다.
2. DOM이 완성되지 않은 상태에서 자바스크립트가 DOM을 조작하면 에러가 발생합니다.

### Render Tree

그리고 렌더링 엔진이 DOM Tree와 CSSOM Tree를 합쳐서 Render Tree를 만들게 됩니다. Tree 화면에 표시되어야 할 모든 Node의 컨텐츠, 스타일 정보를 포함하고 있는 Tree입니다.

> 만약 html 문서 내의 script가 있다면 Syntax Tree가 생성되어 DOM Tree, CSSOM Tree 각각에 반영됩니다.

![](https://velog.velcdn.com/images/piouy0/post/f67557e5-c4a5-4913-9711-372a6452702e/image.png)

> 정리하면, document 객체부터 각 Node를 순회하면서 각각의 맞는 CSSOM을 찾아 규칙을 적용합니다. 그러면서 렌더링과 관련된 요소들을 Render Tree 포함시키게 되는데요. 이 때, meta 태그나 display:none ; 속성을 가진 요소들은 렌더링과 관계가 없기 때문에 Render Tree에 포함되지 않습니다. 위에 설명드리면서 보여드린 이미지는 쉽게 생각하기 위해서 많이 간소화 시킨 자료이므로, Render Tree가 실제로는 더 많은 데이터를 가지고 있고 브라우저마다 조금씩 다르게 생성된다는 것을 알아주시면 좋겠습니다.

### Layout(Reflow)

Render Tree가 생성되면 Layout이라는 과정을 거칩니다. Reflow 라고도 부르는데요. viewport 내에서 요소들에 정확한 위치와 크기를 계산하는 과정입니다. 박스 모델에 따라서 text나 요소의 박스가 화면에서 차지하는 영역이나 margin등 스타일 속성이 계산됩니다. 이 때, css에서 %나 em같은 상대적인 단위를 사용했을 때는 viewport에 맞춰서 pixel 단위로 변환됩니다.

### Paint(Repaint)

Layout 과정에서 렌더링 엔진이 각 요소들이 어떻게 생겼고 이를 어떻게 보여줄지 알 수 있게 되면 마지막으로 화면에 실제 픽셀로 그려지도록 변환하는 과정을 거치게 되는데 이게 페인트입니다.

이렇게 html과 css를 가지고 렌더링 엔진이 어떻게 동작하는지 살펴봤는데요. Critical Rendering Path의 시간을 줄이면 브라우저가 웹 페이지를 보여 주는데 걸리는 시간도 줄일 수 있습니다.

## 만약 CSS가 변경 되었을 때, 어떤일이 발생할까?

그러면 사용자의 동작으로 자바스크립트가 실행되어서 css가 변경되거나 애니메이션 재생이 일어났을 때 등 이와 같은 상황에서는 어떻게 될까요?
이 때는 3가지 경우로 동작을 하는데요.

### Layout부터 다시 발생되는 경우

주로 요소의 크기나 위치가 바뀔 때, 혹은 브라우저 창의 크기가 바뀌었을 때, 다시 발생합니다.

![](https://velog.velcdn.com/images/piouy0/post/200a889f-0edf-4f35-ad58-ee8ed66a43f5/image.png)

이 때, Layout 수치를 다시 계산해서 배치를 해야 되기 때문에 Layout 과정이 다시 발생하고 이에 맞춰서 페인트도 발생하고 마지막으로 Layer를 합성하는 과정까지 거치게 됩니다.

### Paint부터 다시 발생되는 경우

이 때는 배경이미지나 텍스트 색상, 그림자와 같이 실제 Layout의 수치를 변화시키지 않는 스타일에 변경이 일어났을 때, 발생합니다.

![](https://velog.velcdn.com/images/piouy0/post/538b1478-db03-40c9-a5f1-112c291e656e/image.png)

이와 같은 경우는 Layout 과정이 발생하지 않기 때문에 성능상으로 좀 더 이점을 가집니다.

### 마지막으로 Layer의 합성만 다시 발생되는 경우

![](https://velog.velcdn.com/images/piouy0/post/2d5a919b-18fd-4655-b6a1-ea4bc92d158c/image.png)

Layer는 포토샵에서와 동일하게 페인팅할 영역을 나누어 놓는 것을 의미하는데요. 크롬의 경우에는 Layout 과정 이후에 정해진 기준이나 필요에 의해서 브라우저가 Layer를 생성합니다. 그리고 Render Tree에 있는 노드 객체들은 생성된 Layer에 포함되게 됩니다. Layer들은 Tree 형태로 구성이 되며 렌더링 엔진이 각 Layer를 프린팅하는 과정에서 각각 그려 준 다음에 하나에 비트맵으로 합성해서 페이지를 완성합니다.

이 때의 경우에는 Layout과 Print 과정도 수행하지 않고 Layer의 합성만 발생하기 때문에 성능상으로 가장 큰 이점을 가지게 됩니다.

이렇게 각 세 가지 상황을 살펴봤는데요. CSS 속성이 변경되었을 때, 어떤 경우로 업데이트가 되는지는 [이 페이지](https://csstriggers.com)에서 확인하실 수 있습니다.

## 🫡 참조

[Poiemaweb](https://poiemaweb.com/js-browser)
[우아한테크코스 3기 체프님](https://www.youtube.com/watch?v=sJ14cWjrNis&ab_channel=%EC%9A%B0%EC%95%84%ED%95%9CTech)
[우아한테크코스 4기 결님](https://www.youtube.com/watch?v=v8H5ujL4Tt8&ab_channel=%EC%9A%B0%EC%95%84%ED%95%9CTech)
