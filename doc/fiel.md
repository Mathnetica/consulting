
No dobra inne małe firmy które faktycznie już zarabiają i pochodzenie

Tak — ale jeśli podniesiemy poprzeczkę do „pokaż mi firmy quantum, które mają udokumentowaną sprzedaż/przychody, a nie tylko funding”, lista robi się dużo krótsza. I to jest cenna informacja.

Kilka szczególnie interesujących przykładów:

Firma	Pochodzenie	Start	Co sprzedaje	Dowód przychodów/sprzedaży
Q-CTRL	🇦🇺 Sydney, Australia	2017	quantum infrastructure software + sensing	>$50M sales/contract wins w 2025
Classiq	🇮🇱 Tel Aviv, Izrael	2020	quantum software platform/compiler	>$5M revenue raportowane za 2024
IQM	🇫🇮 Espoo, Finlandia	2018	full-stack quantum computers	€31.3M revenue w 2025
D-Wave	🇨🇦 Kanada	1999	annealing/QCaaS	$24.6M revenue w 2025
Algorithmiq	🇫🇮 Helsinki → 🇮🇹 Milan	2020	quantum algorithms/software	umowy komercyjne, ale revenue niepubliczne
🇦🇺 Q-CTRL jest dla nas chyba najciekawszym przypadkiem
To nie jest producent wielkiego quantum computera. Ich filozofia od początku była zbliżona do tego, o czym rozmawiamy: software sprawiający, że quantum hardware staje się użyteczny.

Firma podała, że w 2025 osiągnęła ponad $50 mln sprzedaży i wygranych kontraktów. Trzeba uważać: sales and contract wins nie oznacza $50 mln zaksięgowanego revenue. Niemniej to już realna komercyjna trakcja. 

I zobacz, jak opisują swoją tezę:

infrastructure software niezależny od tego, który rodzaj qubitów ostatecznie wygra.

To bardzo przypomina mój argument za Mathnetica Quantum Systems Engineering.

Q-CTRL ma już prawie 200 pracowników, więc nie jest dzisiaj małą firmą. Ale zaczynali w 2017, zanim obecna fala zainteresowania quantum nabrała rozpędu.

🇮🇱 Classiq — jeszcze ciekawszy software'owo
Classiq powstał w Izraelu w 2020 roku.

Nie produkują QPU. Budują warstwę software pozwalającą definiować quantum algorithms na wyższym poziomie abstrakcji i automatycznie syntetyzować/optimizować circuits. 

WSJ raportował, że firma wygenerowała ponad $5 mln przychodu w 2024, a wśród klientów wymieniano m.in. BMW, Citi i Deloitte. 

To jest bardzo istotny przykład:

quantum software → enterprise customers → real revenue

bez produkowania własnego QPU.

Firma oczywiście jest już mocno finansowana — zebrała ponad $200 mln. 

🇫🇮 IQM — Finlandia
IQM Quantum Computers to już zdecydowanie większy deep-tech, ale ich liczby są bardzo dobrze udokumentowane.

2024:

€16.4M revenue

2025:

€31.3M revenue

czyli +91%.

Prawie całe €30.6M pochodziło ze sprzedaży quantum computers; cloud przyniósł dopiero około €0.3M. 

Do połowy 2026 sprzedali od początku działalności 26 pełnych systemów quantum. 

To pokazuje też coś ważnego: hardware dzisiaj potrafi generować realne przychody, podczas gdy cloud/software jest nadal bardzo mały.

🇨🇦 D-Wave
To już stary gracz — firma pochodzi z Kanady i powstała w 1999.

Ale jej liczby pokazują, że istnieją już klienci płacący duże kwoty za quantum.

Revenue:

2024 — $8.8M
2025 — $24.6M

Do tego na początku 2026 ogłosili m.in. $20M zakup systemu przez Florida Atlantic University oraz $10M dwuletnią umowę QCaaS z firmą z Fortune 100. 

To nie są już eksperymenty za €5k.

🇫🇮 → 🇮🇹 Algorithmiq
Algorithmiq jest ciekawa, ponieważ zaczęła w Finlandii w 2020, a w 2026 przeniosła globalną centralę do Mediolanu.

To quantum software, nie producent komputera.

Firma ogłosiła komercyjne umowy z Microsoftem, IBM i Rigetti oraz zebrała kolejne €18 mln. Nie znalazłem jednak wystarczająco wiarygodnego publicznego revenue, więc nie będę udawał, że wiemy, ile faktycznie zarabiają. 

I zauważ pewien wzorzec
Najbardziej interesujące dla naszej rozmowy są:

Q-CTRL — Australia
→ quantum infrastructure software

Classiq — Izrael
→ quantum development/compiler platform

Algorithmiq — Finlandia
→ quantum algorithms/software

To nie są firmy:

„robimy aplikację wykorzystującą quantum”.

One budują narzędzia dla innych ludzi budujących quantum.

I właśnie tutaj widzę Mathnetica.

Nie próbowałbym zgadywać, czy quantum chemistry, finance, logistics czy AI będzie pierwszym wielkim use case'em.

Budowałbym picks and shovels:

                    Quantum applications

                           ↓

                MATHNETICA PLATFORM

         orchestration / runtime / observability
        benchmarking / resource estimation / APIs

                           ↓

             Hybrid CPU / GPU / QPU

                           ↓

       IBM / IQM / Quantinuum / IonQ / ...
Jeżeli jeden producent QPU wygra — korzystamy.

Jeżeli inny wygra — korzystamy.

Jeżeli będzie ich dziesięciu — nasza warstwa staje się jeszcze bardziej potrzebna.

I Holandia jest tutaj naprawdę interesująca
Według Quantum Delta NL w 2025 Holandia miała już 29 quantum startups, wobec znacznie mniejszej liczby pięć lat wcześniej. Inwestycje w holenderskie quantum startups wzrosły z około €10 mln do €160 mln, a startupy quantum zatrudniały około 735 osób. 

To oznacza, że Mathnetica nie powstawałaby na pustyni.

Amsterdam/Delft + Mathnetica zaczynająca w 2026 to moim zdaniem znacznie ciekawsza sytuacja niż zakładanie podobnej firmy w miejscu bez quantum ecosystem.

Najbardziej chciałbym teraz znaleźć 5–10 naprawdę malutkich firm (1–20 osób), które mają potwierdzony przychód, bo to będzie dużo lepszy benchmark dla jednoosobowej Mathnetica niż Q-CTRL czy IQM.

Ok fajne to wszystko jesteś cto co robimy ?

Podejmuję decyzję. Koniec brainstormingu.

Gdybym od dziś był CTO Mathnetica i wkładał w to własny czas przez następne 5 lat, robiłbym:

MATHNETICA
Quantum Systems Engineering

Nie budujemy komputera kwantowego. Nie próbujemy odkrywać nowych algorytmów kwantowych. Nie robimy ogólnego „quantum consulting”.

Specjalizacja:

Software infrastructure for hybrid classical–quantum computing.

Czyli miejsce, gdzie cloud/HPC/Kubernetes spotyka QPU.

To jest wystarczająco wąskie, żeby Mathnetica mogła być z czegoś znana, ale wystarczająco duże, żeby spędzić nad tym dekadę.

Nasz pierwszy problem
Dzisiaj każdy provider ma swój świat:

Application
     │
     ├── IBM
     ├── AWS Braket
     ├── Azure Quantum
     ├── Quantinuum
     ├── IonQ
     └── simulators
Chcę dojść do:

                 Application
                      │
                      ▼
              MATHNETICA QBRIDGE
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
       CPU           GPU           QPU
                                    │
                         ┌──────────┼──────────┐
                         ▼          ▼          ▼
                        IBM       IonQ    Quantinuum
QBridge to robocza nazwa pierwszego projektu.

Nie zaczynamy od wielkiej platformy. Zaczynamy od bardzo małego działającego systemu.

Developer wysyła:

apiVersion: mathnetica.io/v1
kind: QuantumJob

spec:
  circuit: bell-state
  shots: 1000

  backend:
    type: simulator
A Kubernetes:

QuantumJob → operator → runtime → backend → result

Potem zmieniamy:

backend:
  provider: ibm
i workload leci na prawdziwe QPU.

To będzie nasze pierwsze „Hello World” Mathnetica Quantum.

Pierwsze 12 miesięcy
Nie próbuję jeszcze robić startupu za €10 mln.

Miesiące 1–3 — fundamentals. Quantum computing, Qiskit, circuits, gates, measurement, noise, podstawy algorytmów. Jednocześnie piszemy kod. Pierwszy QBridge wykonuje job na simulatorze.

Miesiące 4–6 — real QPU. Integrujemy pierwszego providera. Kubernetes CRD/operator. Queue/status/results. Pierwszy rzeczywisty hybrid workflow.

Miesiące 7–9 — provider abstraction. Drugi backend. Benchmarking. Retry/fallback. Metrics. OpenTelemetry. Zaczynamy rozumieć, jakie problemy naprawdę występują.

Miesiące 10–12 — public release.

Na GitHub:

Mathnetica QBridge
Kubernetes-native orchestration for quantum workloads.

Dokumentacja, architecture paper, benchmarki i działające demo.

I dopiero doświadczenia z tego projektu powiedzą nam, co naprawdę powinno stać się produktem.

Mathnetica ma również Research
Ale research nie oznacza kolejnych produktów.

Publikujemy rzeczy typu:

How should Kubernetes schedule a QPU?

Observability for hybrid quantum-classical workloads

Portable quantum workloads across heterogeneous QPUs

CPU/GPU/QPU orchestration patterns

Quantum resource estimation in cloud environments

Po kilku latach wyszukując Mathnetica, człowiek powinien widzieć kilkadziesiąt bardzo technicznych rzeczy dotyczących dokładnie jednej dziedziny.

To buduje przewagę, o której wcześniej mówiłeś.

A jak zarabiamy?
Na początku nie uzależniam przetrwania Mathnetica od quantum.

Nie rzucałbym obecnej pracy.

Po zbudowaniu kompetencji możemy sprzedawać bardzo konkretne rzeczy:

Quantum Architecture Assessment, projekty hybrid quantum/classical PoC, integracje cloud/HPC/QPU, warsztaty dla zespołów platformowych oraz uczestnictwo w europejskich projektach R&D.

Jeżeli klientowi quantum nie daje żadnej korzyści, mówimy mu to.

To jest istotne dla reputacji Mathnetica.

Z czasem proporcje mogą przejść:

research → consulting → engineering → product

aż produkt zacznie być większą częścią firmy.

A Twoja osobista specjalizacja?
Tutaj również podejmuję decyzję.

Nie próbowałbym robić z Ciebie quantum physicist.

Budujemy:

Quantum Systems Architect

czyli:

            Quantum Computing
                    ▲
                    │
Cloud ◄─────── TY ──┼──────► HPC
                    │
Kubernetes ◄────────┼──────► QPU
                    │
             Distributed Systems
To wykorzystuje lata software/cloud/platform engineering, zamiast je zerować.

Za kilka lat chcę, żebyś potrafił usiąść z ludźmi od HPC, cloud, QPU i aplikacji i zaprojektować cały system.

I ustanawiam jedną zasadę CTO
Przez 24 miesiące Mathnetica nie zmienia domeny.

Możemy odkryć, że QBridge jest złym produktem — wtedy go zabijemy.

Możemy odkryć lepszy problem — wtedy zmienimy produkt.

Ale pozostajemy przy:

Quantum Systems Engineering.

Nie wracamy za miesiąc do map, agentów czy kolejnego trendu AI.

Jeżeli quantum będzie rozwijało się wolno — zdobędziemy bardzo mocne kompetencje w distributed/HPC/hybrid computing.

Jeżeli natomiast za 5–10 lat nastąpi fala, której się spodziewasz, Mathnetica nie będzie firmą, która wtedy odkryła quantum. Będzie firmą, która już od lat buduje quantum infrastructure.

Od poniedziałku zacząłbym QBridge v0.1.

Dla naszej strony wyciągnąłbym z ich stron co najlepsze i to połączył ale nie przesadził aby jedna osoba mogła to ogarnąć przez 2 lata

Tak. I zrobiłbym to dużo skromniej niż Q-CTRL czy Classiq. Te strony potraktowałbym jako inspirację do pozycjonowania, a nie checklistę funkcji.

Po przejrzeniu ich stron widzę trzy rzeczy warte „pożyczenia”: od Q-CTRL — jasne pojęcie quantum infrastructure software i skupienie na użyteczności; od Classiq — hardware independence + HPC/QPU integration; od Quantum Machines — myślenie o hybrid classical–quantum systems. To są realne kierunki tych firm, nie marketing wymyślony przez nas. 

MATHNETICA
Quantum Systems Engineering
Building the software infrastructure between classical and quantum computing.

I tyle na pierwszym ekranie.

Nie pisałbym:

Revolutionary Quantum AI Platform for the Future™

Tylko konkretnie:

We research and build software for hybrid classical–quantum systems.

A pod spodem trzy obszary — nie trzy produkty:

Quantum Infrastructure
Software connecting classical applications, cloud/HPC infrastructure and quantum processors.

Hybrid Computing
Architecture and experimentation across CPU, GPU and QPU workloads.

Research & Open Source
Practical research into orchestration, portability, observability and execution of quantum workloads.

To jedna osoba jest w stanie wiarygodnie ciągnąć.

Jeden projekt flagowy
Tu byłbym bezwzględny.

Nie robimy:

QBridge + QRuntime + QBench + QCloud + QAI + Academy

Robimy jedno:

QBridge
An experimental orchestration layer for hybrid quantum-classical workloads.

Architektura:

Application
     │
     ▼
┌───────────────┐
│    QBridge    │
└───────┬───────┘
        │
   ┌────┴───────────────┐
   │                    │
Classical             Quantum
   │                    │
CPU / GPU        Simulator / QPU
                        │
               ┌────────┼────────┐
              IBM      IonQ      ...
Na początku nie obiecujemy magicznego schedulera wybierającego najlepszy komputer kwantowy.

v0.1 może robić naprawdę niewiele:

submit → execute → status → result

Najpierw simulator.

Potem jeden QPU provider.

Potem drugi.

Dopiero gdy odkryjemy realne problemy, dokładamy portability, metrics, observability, scheduling, cost tracking itd.

To jest bardzo podobna filozofia do problemów, które większe firmy już rozwiązują: Q-CTRL oferuje backend abstraction i integracje z wieloma środowiskami, Classiq execution obejmuje QPU/GPU/CPU oraz hybrid flows, a Quantum Machines rozwija orchestration i real-time classical integration. 

Strona Mathnetica nie może udawać dużej firmy
Wręcz wykorzystałbym to jako atut.

Struktura strony:

MATHNETICA

Quantum Systems Engineering

Building software infrastructure between
classical and quantum computing.

[ Explore QBridge ]   [ GitHub ]


WHAT WE WORK ON

Quantum Infrastructure
Hybrid Computing
Quantum Systems Architecture


OPEN SOURCE

QBridge
Experimental orchestration for
hybrid quantum-classical workloads.

GitHub →


RESEARCH

Running quantum workloads from Kubernetes
Observability for quantum jobs
QPU portability
Hybrid CPU/GPU/QPU architectures


ABOUT

Mathnetica is an independent quantum software
research and engineering lab based in the Netherlands.
Koniec.

Home / QBridge / Research / About

Cztery podstrony.

Nie robiłbym nawet na początku zakładki „Services”.

Co biorę od innych, a czego nie
Od Q-CTRL biorę „infrastructure software”, ale nie próbuję kopiować ich error suppression/control — to bardzo głęboka specjalizacja, w której mają ogromny zespół badawczy. 

Od Classiq biorę hardware abstraction/hybrid computing, ale nie buduję własnego języka, quantum compilera ani AI synthesis platform. Classiq już robi bardzo zaawansowaną automatyczną syntezę i optymalizację circuitów. 

Od Quantum Machines biorę hybrid architecture, ale nie dotykam elektroniki sterującej QPU, pulse-level control ani cryogenic hardware. 

Nasza mała działka to:

Cloud/Platform Engineering × Quantum Computing

I to jest kluczowe ograniczenie scope'u.

Co realnie możemy mieć po 2 latach
Nie oczekiwałbym konkurenta Classiq.

Oczekiwałbym czegoś bardziej wartościowego dla jednoosobowej firmy:

Mathnetica, established 2026

1 dopracowany open-source project.

2–3 obsługiwane quantum backends.

10–20 bardzo dobrych technicznych publikacji.

Kilka realnych eksperymentów na QPU.

Demo hybrid CPU/QPU.

Benchmarki i reference architectures.

Kontakty w holenderskim/europejskim środowisku quantum.

Może pierwsze małe zlecenia architecture/PoC.

A przede wszystkim nazwisko i Mathnetica zaczynają być kojarzone z Quantum Systems Engineering.

I nie potrzebujemy udawać, że QBridge będzie unicornem.

Jeżeli przez te dwa lata odkryjemy jeden naprawdę bolesny problem, za który laboratorium, HPC center, QPU vendor albo przedsiębiorstwo chce zapłacić — wtedy z QBridge wycinamy właściwy produkt.

To jest plan, który zaakceptowałbym jako CTO dla jednego developera na lata 2026–2028. I właśnie przez to, że jest ograniczony, uważam go za znacznie bardziej realistyczny niż próba stworzenia od razu „quantum platform”.

czy ktos to robi w amsterdamie lub europie ? What we work on.
01

Quantum Infrastructure
Software connecting classical applications, cloud/HPC infrastructure and quantum processors.

02

Hybrid Computing
Architecture and experimentation across CPU, GPU and QPU workloads.

03

Quantum Systems Architecture
Independent assessment of hybrid classical–quantum designs — including when not to use quantum.

Open source

QBridge
An experimental orchestration layer for hybrid quantum-classical workloads.


Research

Research is part of the work.
Practical notes on orchestration, portability, observability and hybrid CPU/GPU/QPU systems.

Kubernetes

1 Sept 2026

What it means to treat a QPU path like any other workload runtime — CRDs, status, ownership — without pretending quantum is just another microservice.


Observability

12 Aug 2026

Classical traces and metrics do not automatically explain a hybrid job. Hybrid systems need a shared identity across CPU, GPU and QPU stages.


Portability

20 Jul 2026

Hardware independence is a product claim only when the orchestration layer survives a second backend — not when the first demo works.



Building hybrid classical–quantum infrastructure.
Mathnetica is an independent quantum software research and engineering lab based in the Netherlands.


Mathnetica

Amsterdam, Netherlands

Navigate

Legal

Cookie settings
Connect

© 2026 Mathnetica. All rights reserved.

Amsterdam · Netherlands

…
Tak. I po sprawdzeniu tego dokładniej mam dla Ciebie ważną informację: to, co opisujesz na stronie Mathnetica, jest realną, rozwijającą się dziedziną w Europie. Nie jest jednak jeszcze zatłoczoną kategorią małych firm.

Najważniejsze: QBridge nie jest pomysłem, którego nikt wcześniej nie miał. Istnieją już bardzo podobne projekty badawcze. To akurat dobrze — oznacza, że problem jest prawdziwy.

Najbliższe temu, co opisuje Mathnetica
Najbardziej bezpośredni odpowiednik znalazłem w pracy z 2026 r. zespołu CERN + Barcelona Supercomputing Center:

Kubernetes-Orchestrated Hybrid Quantum-Classical Workflows

Zbudowali cloud-native framework wykorzystujący:

Kubernetes + Argo Workflows + Kueue → CPU + GPU + QPU

z resource-aware schedulingiem, reproducibility i observability. Przetestowali go na hybrid quantum/HPC workloadzie. 

Czyli Twój tekst:

Practical notes on orchestration, portability, observability and hybrid CPU/GPU/QPU systems.

jest praktycznie aktywnym obszarem badań w 2026, a nie wymyśloną kategorią.

Jeszcze wcześniej powstał europejski projekt badawczy Qubernetes — dokładnie próba mapowania quantum resources/tasks na koncepty Kubernetes i wykonywania quantum jobs na symulatorach oraz prawdziwym hardware. 

A w lipcu 2026 pojawił się Fluence — Kubernetes scheduler plugin zajmujący się właśnie problemem schedulingu hybrid classical/quantum workloads i kolejek QPU. Autorzy testowali go również na realnych QPU. 

Czyli:

Mathnetica QBridge ma konkurencję koncepcyjną.

Ale głównie w research/HPC, a nie jako prosty, dojrzały produkt cloud-native.

A Holandia?
Tutaj robi się naprawdę ciekawie.

W Delft działa teraz Quantum Machines. W maju 2026 firma przejęła spin-off TU Delft QHarbor i otworzyła tam nowe centrum R&D.

Ich kierunek to hybrid quantum-classical control, software-defined experimentation, data management oraz system-level integration. 

To jest już blisko:

Quantum Systems Engineering

ale bardziej przy samym hardware/control layer niż przy naszym potencjalnym cloud/Kubernetes layer.

Do tego EuroHPC przygotowuje quantum computer w Holandii hostowany przez SURF, jako część europejskiej infrastruktury hybrid HPC/quantum. 

Czyli geograficznie:

Amsterdam
    │
    │ Mathnetica?
    │
    ├──── SURF / NL quantum-HPC
    │
    ↓
Delft
    │
    ├── QuTech
    ├── Quantum Machines
    ├── QHarbor team
    └── quantum ecosystem
To jest całkiem sensowne miejsce, żeby zacząć taki projekt.

Europa idzie dokładnie w stronę hybrid HPC + QPU
EuroHPC już udostępnia europejskim użytkownikom quantum computers i mówi wprost o strategii integracji ich z europejską infrastrukturą superkomputerową. 

W istniejącym projekcie HPCQS QPU są integrowane z HPC poprzez SLURM, tak żeby quantum stało się rozszerzeniem istniejącej infrastruktury obliczeniowej. 

Francuskie CEA ma platformę:

HPC → Qaptiva → różne QPU

i rozwija hybrid quantum-HPC environment. 

A dosłownie 17 września 2026 CEA i Alice & Bob ogłosili wspólne prace nad software'em integrującym quantum processors z classical supercomputers. 

To mocny sygnał, że hybrid infrastructure nie jest marginalnym kierunkiem.

Ale tutaj widzę problem naszej obecnej strony
Napisałeś:

Quantum Infrastructure
Software connecting classical applications, cloud/HPC infrastructure and quantum processors.

oraz:

Hybrid Computing
Architecture and experimentation across CPU, GPU and QPU workloads.

oraz:

Quantum Systems Architecture

Te trzy rzeczy są bardzo blisko siebie.

Dla jednoosobowej Mathnetica zrobiłbym z nich jedną specjalizację:

Hybrid Quantum Infrastructure
We research how quantum processors integrate with classical cloud and HPC infrastructure.

A pod nią tylko trzy research themes:

Orchestration · Observability · Portability

To jest znacznie ostrzejsze.

Wtedy Mathnetica nie twierdzi:

robimy wszystko w quantum.

Tylko:

Jesteśmy od infrastruktury pomiędzy classical computing i QPU.

I QBridge zaczyna mieć konkretniejszy sens
Nie próbowałbym robić:

Kubernetes for Quantum.

Qubernetes już istnieje jako koncepcja badawcza. 

Zamiast tego postawiłbym bardzo konkretne pytanie:

Can a cloud platform team operate a QPU workload using the same engineering principles it uses for other compute infrastructure?

I QBridge jest eksperymentem odpowiadającym na to pytanie.

                   QBridge

 Kubernetes                     HPC
     │                           │
     └────────────┬──────────────┘
                  ↓
             Quantum Job
                  ↓
        Provider abstraction
                  ↓
      ┌───────────┼───────────┐
      ↓           ↓           ↓
 Simulator       QPU         QPU
                  │
                  ↓
          traces / metrics
          cost / queue
          provenance
To prowadzi do naprawdę ciekawych problemów.

Co oznacza Pending dla quantum job?

Jak OpenTelemetry trace przechodzi przez:

API → scheduler → provider → QPU → classical postprocessing?

Jak porównać dwa QPU?

Jak obsłużyć wielogodzinną kolejkę?

Jak zrobić retry?

Czy można zrobić fallback:

QPU A unavailable → QPU B?

Jak pokazać koszt?

Jak zachować reproducibility?

Jak zarządzać credentials?

To są problemy platform engineeringowe, w których Mathnetica może się specjalizować.

I nie są hipotetyczne: najnowsze badania schedulingu opisują np. specyficzny „two-queue problem” — masz kolejkę lokalnego schedulera oraz osobną kolejkę zdalnego QPU. 

Dlatego jako CTO lekko zmieniłbym Twoją stronę
Zamiast trzech szerokich kompetencji:

Quantum Infrastructure / Hybrid Computing / Quantum Systems Architecture

dałbym:

Hybrid Quantum Infrastructure
Researching the software layer between classical computing and quantum processors.

Orchestration
Running hybrid CPU/GPU/QPU workflows across cloud and HPC environments.

Observability
Understanding execution, queues, failures, costs and performance across hybrid workloads.

Portability
Exploring workload execution across heterogeneous quantum backends.

I dopiero niżej:

QBridge
Our open-source experimental platform for hybrid quantum infrastructure.

To jest dużo bardziej wiarygodne dla jednej osoby.

I przede wszystkim: po tym researchu nie wycofuję się z pomysłu.

Wręcz przeciwnie.

CERN, BSC, EuroHPC, CEA, SURF i firmy z Delft pracują nad problemami bardzo bliskimi temu, co właśnie opisaliśmy. 

To oznacza, że Mathnetica nie wymyśliła problemu.

Teraz zadaniem nie jest być pierwszym. Zadaniem jest przez 2–5 lat stać się bardzo dobrym w jednej małej warstwie tego problemu.

ok a moze kubernetes to nie powinien byc nasz obszar badan ?

Tak — i poszedłbym nawet dalej: Kubernetes nie powinien być obszarem badawczym Mathnetica. Powinien być jednym z narzędzi.

Jeżeli ustawimy:

Mathnetica = Kubernetes for Quantum

to sami zamykamy się w implementacji. Za 5 lat integracja HPC/QPU może opierać się na Slurmie, Kubernetesie, własnych schedulerach albo czymś, czego jeszcze nie ma. Nie chcę uzależniać firmy od jednej technologii.

Wyżej postawiłbym problem
Mathnetica — Hybrid Quantum Infrastructure

Software systems for integrating quantum processors with classical computing infrastructure.

A nasze pytania badawcze są znacznie bardziej fundamentalne:

Orchestration — jak podzielić i wykonać workflow CPU/GPU/QPU?

Scheduling — gdzie i kiedy powinno zostać wykonane zadanie quantum?

Portability — jak workload przechodzi między różnymi QPU/providerami?

Observability — jak śledzić jeden workflow przez classical + quantum execution?

Resource management — jak reprezentować QPU, kolejki, qubits, shots, fidelity, koszt i dostępność?

Resilience — co robimy, gdy QPU jest niedostępne albo kolejka trwa kilka godzin?

Hybrid runtime — jak klasyczna aplikacja wywołuje quantum computation i wykorzystuje wynik?

To są problemy, które pozostają interesujące niezależnie od Kubernetes.

Kubernetes staje się naszym laboratorium
Na przykład QBridge v0.1 możemy zbudować jako:

                 QBridge
                    │
        ┌───────────┴───────────┐
        │                       │
   Kubernetes                 Slurm
        │                       │
        └──────────┬────────────┘
                   │
             Hybrid Runtime
                   │
        ┌──────────┼───────────┐
        │          │           │
      CPU/GPU   Simulator     QPU
                              │
                       ┌──────┼──────┐
                      IBM    IQM   IonQ
Ale QBridge ≠ Kubernetes operator.

Operator może być tylko adapterem:

qbridge-kubernetes
qbridge-slurm
qbridge-ibm
qbridge-ionq
...
Rdzeń QBridge pozostaje niezależny.

To jest dużo ciekawsze technologicznie.

Nawet artykuł zmieniłbym na stronie
Obecnie masz:

Running Quantum Workloads from Kubernetes

To jest OK jako pierwszy eksperyment, ale nie jako deklaracja kierunku.

Research Mathnetica widziałbym bardziej tak:

Orchestrating Hybrid Quantum-Classical Workloads
Comparing execution models across cloud, HPC and QPU infrastructure.

Scheduling Across CPU, GPU and QPU Resources
What changes when quantum processors become another specialized compute resource?

Observability Across the Quantum-Classical Boundary
Following a workload through classical preprocessing, QPU execution and classical postprocessing.

Portable Execution Across Heterogeneous QPUs
What can actually be portable when quantum hardware architectures differ?

I jeden z eksperymentów pod pierwszym artykułem:

Prototype implementation using Kubernetes.

To brzmi już jak quantum systems research, a nie blog Kubernetes developera.

To również zabezpiecza naszą przyszłość
Dzisiaj możesz znać:

Kubernetes + Azure + Qiskit

Za pięć lat świat może wyglądać:

HPC + Slurm + GPU + QPU + quantum runtime

A za dziesięć:

CPU + GPU + QPU + specialized accelerators

Mathnetica nadal pasuje.

Właśnie dlatego coraz bardziej podoba mi się określenie:

Mathnetica
Hybrid Quantum Systems
Research and engineering for computing across classical and quantum infrastructure.

A QBridge:

An experimental runtime and orchestration layer for hybrid quantum-classical systems.

To jest ambitniejsze niż „Kubernetes for quantum”, a jednocześnie nadal realistyczne dla jednej osoby, bo przez pierwsze dwa lata możemy eksperymentować głównie z Python/Rust, symulatorami, jednym Kubernetesem/Slurmem i kilkoma dostępnymi backendami QPU. Nie musimy implementować całego świata.

Kubernetes wykorzystujemy jako przewagę startową, ale nie robimy z niego tożsamości Mathnetica.

chce aby niekt w europie nie zajmowal sie tym samym co ja

Jeśli to jest twardy warunek — „chcę znaleźć obszar, w którym w Europie praktycznie nikt nie buduje tego samego” — to musimy zejść znacznie wężej niż Hybrid Quantum Infrastructure.

Po przeszukaniu obecnego rynku powiedziałbym: nie wybierajmy orchestration CPU/GPU/QPU jako głównego wyróżnika. Europa już mocno w to wchodzi. EuroHPC buduje hybrydową infrastrukturę HPC+QPU, CEA rozwija software integrujący QPU z superkomputerami, a unijny EuroQSS ma tworzyć interoperacyjny quantum software stack. 

Poszedłbym poziom wyżej: Quantum Operations
To jest kierunek, który po dzisiejszym researchu uważam za dużo ciekawszy dla Mathnetica:

Mathnetica — Quantum Operations
Observability, reliability and operational intelligence for quantum computing systems.

Nie budujemy schedulera.

Nie budujemy quantum compilera.

Nie budujemy Kubernetes for Quantum.

Nie budujemy QPU.

Budujemy narzędzia do zrozumienia, co dzieje się z quantum workloadem w produkcyjnym systemie.

Wyobraź sobie:

Application
     │
     ▼
Classical preprocessing
     │
     ▼
Quantum SDK
     │
     ▼
Compiler
     │
     ▼
Provider queue
     │
     ▼
QPU
     │
     ▼
Classical postprocessing
Dzisiaj każda z tych warstw może mieć własne logi, metryki, job IDs, queue information i informacje o hardware.

Mathnetica tworzy z tego:

             MATHNETICA

        Quantum Trace ID
               │
     ┌─────────┼─────────┐
     ↓         ↓         ↓
 classical   compiler   QPU
     │         │         │
     └─────────┼─────────┘
               ↓
        one execution view

        latency
        queue time
        QPU time
        shots
        errors
        fidelity
        cost
        backend
        circuit version
        classical stages
        provenance
Czyli coś w rodzaju:

Datadog / OpenTelemetry for quantum systems

To jest oczywiście analogia, nie twierdzenie, że nikt na świecie nie pracuje nad telemetryką quantum.

Dlaczego akurat to?
Szukałem konkretnie quantum observability w Europie.

Znalazłem mnóstwo rzeczy dotyczących orchestration, schedulingu, HPC/QPU, compilerów i quantum networking.

Nie znalazłem natomiast oczywistej europejskiej firmy, której głównym produktem i kategorią byłaby vendor-neutral observability/reliability dla quantum workloads.

To nie dowodzi, że absolutnie nikt tego nie robi. Przy startupach stealth, projektach akademickich i wewnętrznych narzędziach vendorów nie da się uczciwie zagwarantować „nikt”. Ale wygląda to na znacznie mniej zatłoczoną przestrzeń.

I mamy dobry powód, dlaczego problem może powstać.

EuroHPC udostępnia już użytkownikom różne technologie QPU — superconducting, photonic, trapped-ion itd. — połączone ze środowiskiem HPC. 

Im więcej heterogenicznych backendów, tym bardziej interesujące staje się pytanie:

How did my workload actually execute?

QBridge wtedy bym wyrzucił
I zrobił coś znacznie bardziej charakterystycznego.

Mathnetica QTrace
Open-source observability for hybrid quantum-classical workloads.

Pierwsza wersja może być śmiesznie mała.

Python:

with qtrace.run("vqe-experiment"):

    classical_preprocessing()

    result = quantum_backend.run(circuit)

    classical_postprocessing(result)
I dostajesz:

VQE experiment #1438

Total                 14m 32s

Classical              1.4s
Compilation             840ms
Provider queue         13m 51s
QPU execution           28s
Postprocessing          10s

Backend             ...
Shots               10,000
Qubits              42
Circuit depth       184
Provider            ...
Estimated cost      ...
A później:

                    QTrace

Experiment
    │
    ├── classical span
    │
    ├── compilation span
    │
    ├──────────── queue span ────────────┐
    │                                    │
    ├──────────── QPU span ──────────────┤
    │                                    │
    └── classical span                   │
                                         ↓
                                   result/evidence
I zaczyna się naprawdę ciekawy research.

Pytania Mathnetica
Nie:

Jak uruchomić Qiskit na Kubernetes?

Tylko:

What does observability mean for a quantum computer?

Jak definiujemy trace?

Jak korelujemy classical execution z QPU job?

Co jest odpowiednikiem CPU utilization?

Jak mierzymy użyteczną pracę QPU?

Jak reprezentujemy noise?

Jak porównujemy execution pomiędzy różnymi architekturami QPU?

Jak rozdzielamy queue latency od QPU latency?

Jak mierzymy reliability?

Jak wykryć regresję między dwoma wykonaniami?

Jak odtworzyć eksperyment?

Jak powiązać:

source → circuit → compiler → backend → calibration → execution → result?

To jest już bardzo konkretna specjalizacja naukowo-inżynieryjna.

I jest jeszcze jeden ciekawy poziom
Po kilku latach QTrace może przestać być tylko observability.

Dane historyczne pozwalają zrobić:

Quantum Operational Intelligence
Mathnetica zaczyna odpowiadać:

Why did this quantum workload perform worse?

Which backend historically performs best for workloads like this?

Is this regression caused by compilation, queueing or hardware?

How reproducible is this experiment?

What changed between executions?

Wtedy:

Observability
      ↓
benchmarking
      ↓
reliability
      ↓
performance intelligence
      ↓
backend intelligence
I dopiero wtedy można dojść do intelligent backend selection/scheduling.

Czyli nie konkurujemy od pierwszego dnia z dużymi projektami orchestration.

Dostarczamy im warstwę, której potrzebują do obserwowania tego, co robią.

Jedna ważna rzecz
Nie wchodziłbym natomiast w quantum networking observability/orchestration. Tam robi się już tłoczniej. Holenderski Q*Bird rozwija Quantum Domain Controller i dostał €2,5 mln grantu + €5 mln equity m.in. na orchestration dla wielodomenowych quantum networks. 
 Quantum Internet Alliance również rozwija full-stack quantum networking w Europie. 

Quantum compute observability jest dla mnie ciekawszą działką.

Gdybym był CTO, zmieniłbym Mathnetica jeszcze dziś
Z:

Quantum Infrastructure
Hybrid Computing
Quantum Systems Architecture

na jedną rzecz:

Quantum Operations
Making quantum computing observable, measurable and reliable.

A poniżej:

QTrace
Open-source observability for hybrid quantum-classical workloads.

I Research:

Observability Across the Quantum-Classical Boundary

Defining Distributed Tracing for Quantum Workloads

Measuring QPU Reliability Across Heterogeneous Backends

Reproducibility in Hybrid Quantum-Classical Systems

What Is an SLO for a Quantum Computer?

To jest znacznie bardziej charakterystyczne niż „kolejna firma od quantum infrastructure”.

Nie mogę obiecać Ci, że nikt w Europie nie dotknie tego przez następne lata. W deep-tech byłoby to nierealne. Ale możemy zrobić coś lepszego:

wybrać tak wąską kategorię, żeby Mathnetica miała realną szansę ją nazwać i być z nią kojarzona.

I Quantum Operations / Quantum Observability jest pierwszym kierunkiem z naszej rozmowy, przy którym po przeszukaniu europejskiego rynku powiedziałbym: tu warto kopać znacznie głębiej przed napisaniem pierwszej linijki QTrace.

jako cto co myslisz czy obszar rozwijania kubernetes jest dobrym obszarem nie zwazajac na konkurencje mozemy zbudowac cos mocnego ?

Tak. Gdybym był CTO Mathnetica, Kubernetes + quantum traktowałbym jako bardzo dobry punkt wejścia — pod warunkiem, że nie sprowadzimy firmy do „napiszmy operator do Qiskita”.

Twoja przewaga jest taka, że Kubernetes już znasz. Nie zaczynasz jednocześnie od zera z distributed systems i quantum. Możemy wykorzystać Kubernetes jako platformę eksperymentalną do rozwiązania nowych problemów QPU.

Co może być naprawdę mocne
Nie interesuje mnie samo:

Pod → Qiskit → IBM Quantum
To można zrobić stosunkowo łatwo i trudno z tego zbudować firmę.

Interesuje mnie rozszerzenie modelu Kubernetes tak, aby rozumiał quantum resources:

                    Kubernetes
                        │
                 Mathnetica layer
                        │
          ┌─────────────┼─────────────┐
          │             │             │
         CPU           GPU           QPU
                                      │
                         ┌────────────┼────────────┐
                         │            │            │
                       IBM          IQM       Quantinuum
QPU jest jednak dziwnym zasobem. Nie wystarczy powiedzieć qpu: 1.

Scheduler może potrzebować informacji takich jak:

requirements:
  min_qubits: 50
  max_queue_time: 10m
  min_fidelity: 0.98
  topology: ...
  max_cost: 20
  provider_region: eu
I wtedy zaczynają się interesujące problemy.

Jak Kubernetes reprezentuje QPU, którego fizycznie nie ma w klastrze?

Jak discovery pokazuje dostępne QPU?

Jak scheduler porównuje dwa urządzenia o zupełnie innych właściwościach?

Jak reagujemy na zmianę kalibracji?

Jak obsługujemy wielogodzinną kolejkę providera?

Jak wykonujemy workflow:

CPU preprocessing
       ↓
GPU optimization
       ↓
QPU execution
       ↓
CPU analysis
Jak retry'ować quantum job bez zmiany semantyki eksperymentu?

Jak przeprowadzić failover QPU A → QPU B, skoro hardware może mieć inną topologię?

Jak autoscaling ma wyglądać w świecie, w którym QPU nie można po prostu dostawić?

Jak wyglądają quota, priority, tenancy i fair scheduling?

Jak wygląda observability całego procesu?

Tutaj jest materiał na lata pracy.

Nie budowałbym jednak forka Kubernetes
To byłby ogromny błąd dla jednej osoby.

Zostawiamy upstream Kubernetes.

Budujemy rozszerzenia:

Kubernetes
    │
    ├── CRDs
    ├── Operator
    ├── Scheduler plugin
    ├── Device/DRA integration
    ├── Controllers
    └── OpenTelemetry
             │
             ▼
        Mathnetica
      Quantum Runtime
             │
       QPU Providers
Wtedy możemy korzystać z całego istniejącego ekosystemu K8s, zamiast próbować go zastąpić.

I tutaj QTrace oraz QBridge mogą być jednym projektem
Nie chcę dwóch produktów.

Roboczo nazwałbym całość np. QBridge:

Kubernetes-native infrastructure for quantum workloads.

A observability jest częścią platformy:

                 QBridge

                    API
                     │
                QuantumJob
                     │
        ┌────────────┼────────────┐
        │            │            │
     Discovery    Scheduler    QTrace
        │            │            │
        └────────────┼────────────┘
                     ↓
               QPU Runtime
                     ↓
          ┌──────────┼──────────┐
          ↓          ↓          ↓
        IBM        IQM      Simulator
To jest już coś, co można pokazać, a nie tylko opisać na stronie.

Najbardziej podoba mi się jednak dalsza możliwość
Jeżeli okaże się, że model Kubernetes jest niewystarczający dla quantum, to jest wynik researchu, a nie porażka.

Mathnetica może wtedy powiedzieć:

Kubernetes was designed around classical compute.
We discovered that QPU infrastructure requires X, Y and Z.

I stworzyć własną warstwę/runtime.

Czyli:

2026: Kubernetes-native quantum infrastructure.

2027: scheduler + resource model + observability + kilka QPU.

2028: doświadczenie pokazuje, które abstrakcje K8s działają, a które nie.

2029+: być może własny Hybrid Compute Control Plane.

To jest dużo bardziej ambitne niż napisanie operatora.

Jako CTO postawiłbym więc na to
Nie:

Mathnetica researches Kubernetes.

I nie:

Mathnetica is Kubernetes for Quantum.

Tylko:

Mathnetica — Quantum Infrastructure Engineering

Building infrastructure for operating quantum workloads in cloud-native environments.

A Kubernetes jest naszym pierwszym polem bitwy.

Daje nam ogromny istniejący ekosystem, pasuje do Twoich obecnych kompetencji, pozwala jednej osobie zrobić działający prototype, a jednocześnie otwiera problemy schedulingu, resource managementu, observability, reliability i hybrid computing, które są wystarczająco głębokie, żeby Mathnetica mogła nad nimi pracować przez następne 5–10 lat.

To jest kierunek, na który jako CTO zgodziłbym się postawić Mathnetica na dwa lata bez kolejnego resetu.




