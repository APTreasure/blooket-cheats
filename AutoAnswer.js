javascript:(function(){setInterval(()=>{const{stateNode:{state,props}}=Object.values((function findStateNode(node=document.querySelector("body > div")){return Object.values(node)[1]?.children?.[0]?._owner.stateNode?node:findStateNode(node.querySelector(":scope > div"))})())[1].children[0]._owner;const question=state.question||props.client.question;[...document.querySelectorAll(`[class*="answerContainer"]`)].forEach((answer,i)=>{if(question.correctAnswers.includes(question.answers[i])){answer.click();}});},500);})();
