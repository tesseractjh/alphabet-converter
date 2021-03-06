# 우즈베크어/카자흐어 키릴/라틴 문자 변환기
배포 URL : https://cyrillic-latin-converter.herokuapp.com/

![cyrlat](https://user-images.githubusercontent.com/67459853/138544101-223fef96-0ff3-40fe-9457-34be65e20879.PNG)

# 주요 기능
- 우즈베크어 또는 카자흐어 텍스트를 키릴 문자에서 라틴 문자로, 라틴 문자에서 키릴 문자로 상호 변환할 수 있음
- 현재는 우즈베크어 변환만 구현되어 있음

## [ 우즈베크어 ] 키릴 → 라틴 변환 과정
### ① 예외적으로 대응되는 문자 변환
- 일부 어휘에서 Я가 ya 대신 a로 변환됨 (сентябрь → sentabr)
- 어두 또는 모음 뒤에 위치한 Е는 e 대신 ye로 변환됨 (ер → yer)
- 어말이 아닌 모음 뒤에 위치하는 Ц는 s 대신 ts로 변환됨 (операция → operatsiya)
### ② 예외 없이 대응되는 문자 변환
### ③ 대문자로 이루어진 어절에서 이중 글자(digraph)의 대문자 변환
- ②에서 Ya, Ye, Yo, Ch 등으로 변환된 이중 글자 중 대문자로 이루어진 어절 내에 있는 글자는 YA, YE, YO, CH와 같이 모두 대문자로 변환됨
(ЧАЙ → ChAY → CHAY)

## [ 우즈베크어 ] 라틴 → 키릴 변환 과정
### ① 예외적으로 대응되는 문자 변환 1
- 일부 어휘에서 ya가 Я 대신 А로 변환됨. 단어 단위로 변환하기 때문에 생략된 ь도 같이 복원됨 (sentabr → сентябрь)
- 일부 어휘에서 어두의 s가 С 대신 Ц로 변환됨 (sirk → цирк)
- 일부 어휘에서 ts가 ТС 대신 Ц로 변환됨 (operatsiya → операция)
- 일부 어휘에서 연속된 sh가 이중 글자가 아닌 두 개의 단일 자음으로 쓰여 ш 대신 연속된 두 자음 сҳ로 변환됨 (nusha → нусҳа)
### ② oʻ 변환
- ③ 전에 먼저 oʻ을 먼저 변환하여 oʻ 앞의 y에 의해 잘못 변환되는 상황을 방지함 (yoʻq → yўq → йўқ)
- 만약 ②의 과정이 없다면 ③에서 yoʻq → ёʻq, ⑤에서 ёʻq → ёъқ으로 잘못 변환됨
### ③ 이중 글자 변환
- 모든 이중 글자(ya, ye, yo, ch 등)를 대응되는 키릴 문자(Я, Е, Ё, Ч 등)로 변환
### ④ 예외적으로 대응되는 문자 변환 2
- 어두의 e가 Э로 변환됨 (erta → эрта)
- e는 이중 글자 ye에 포함되는 문자이므로 ③ 전에 변경할 수 없어서 ①에 포함되지 않고 ③의 과정에 끝난 후 변환함
### ⑤ 예외 없이 대응되는 문자 변환
### ⑥ 대문자로 이루어진 어절에서 Ъ의 대문자 변환
- 우즈베크어의 라틴 문자 중 하나인 ʼ는 기호이기 때문에 대소문자 구별이 없음
- 그러나 대응되는 키릴 문자인 Ъ는 대소문자가 구별이 존재하므로 ⑤의 과정에서 일괄적으로 소문자로 변환한 후, 대문자로 이루어진 어절 내에 있는 Ъ는 ⑥에서 대문자로 변환된다.
(E’TIBOR → ЭъТИБОР → ЭЪТИБОР)
