"# server-boiler-plate" 

## - typescript 개체가 null, undefined 인 것 같습니다
### tsconfig.json을 다음과 같이 수정하자 오류가 발생하지 않았습니다.

<pre>
  <code>
  {
    "compilerOptions": {
      "strict": true, 
      "strictNullChecks": false
    }
  }
  </code>
</pre>
