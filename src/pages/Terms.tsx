import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-navy mb-8">Termeni și condiții</h1>
          
          <div className="prose prose-slate max-w-none">
            <h2 className="text-2xl font-semibold text-navy">Despre Noi</h2>
            
            <p>Serviciul este oferit de i-TEACHER PROJECTS S.R.L. cu sediul in Iași, Strada Trei Fântâni, nr. 50B, camera 2, jud. Iași, înmatriculată în Registrul comerțului sub nr. J22/2172/2019, având cod unic de înregistrare 41276438, denumită în cele ce urmează Societatea.</p>
            
            <p>Ne puteți contacta prin următoarele mijloace:</p>
            
            <ul className="list-disc pl-5 mb-6">
              <li>Prin poștă la adresa de corespondență: Iași, Strada Trei Fântâni, nr. 50B, camera 2, jud. Iași</li>
              <li>Prin e-mail la adresa contact@i-scoala.ro pentru întrebări referitoare la procedura de plasare a comenzilor, confirmare sau anulare comanda, metode de plata, metode de livrare, reclamații etc.;</li>
              <li>Prin telefon la numărul: 0725.009.988</li>
            </ul>
            
            <h2 className="text-2xl font-semibold text-navy">Definiții</h2>
            <p>Utilizator – orice persoana care vizitează site-ul i-scoala.ro.</p>
            <p>Client – persoana fizică / persoana juridică ce efectuează o comandă.</p>
            <p>Cursuri – orice curs menționat în comandă, care urmează a fi furnizat de către vânzător, clientului.</p>
            <p>Comanda – un document electronic ce intervine ca formă de comunicare între vânzător și client prin care clientul își exprimă intenția de a achiziționa anumite cursuri și să facă plata acestora.</p>
            <p>Vânzător – societatea i-TEACHER PROJECTS S.R.L., având următoarele date de identificare: Cod Unic de Înregistrare RO 41276438, înregistrată la Registrul Comerțului cu nr. J22/2172/2019, cu sediul în Strada Splai Bahlui Mal Stâng, nr.1, Iași.</p>
            <p>Contract – o comandă confirmată de către vânzător, prin care vânzătorul este de acord să vândă și să livreze cursurile iar clientul este de acord să achiziționeze, să primească și să facă plata acestor cursuri.</p>
            
            <h2 className="text-2xl font-semibold text-navy">Despre i-scoala.ro</h2>
            <p>www.i-scoala.ro este un serviciu e-learning care oferă utilizatorilor săi posibilitatea de a intra în posesia cursurilor afișate. Achiziția cursurilor se face pe baza comenzilor primite prin site.</p>
            
            <h2 className="text-2xl font-semibold text-navy">Proprietatea Intelectuală</h2>
            <p>Conținutul și designul www.i-scoala.ro, precum și orice alt material având legătura cu acesta trimis dvs. prin email sau furnizat dvs. prin orice alta modalitate (exemplu: articole, design, descriere cursuri și orice alte materiale), aparțin societății și/sau colaboratorilor săi – acolo unde acest lucru este specificat în mod expres – (drept de autor) și sunt protejate de legislația privind proprietatea intelectuală. Nu puteți utiliza, reproduce sau permite nimănui să utilizeze sau să reproducă materialele www.i-scoala.ro fără a deține o permisiune scrisă, prealabilă din partea societății.</p>
            
            <p>Nu puteți folosi cadre (frames în sensul limbajului HTML) sau tehnici de încadrare (framing techniques în sensul limbajului HTML) pentru mărci, logo-uri, sau alte informații protejate de legea copyrightului (inclusiv imagini, texte, interfețe, formulare) ale www.i-scoala.ro fără a deține o permisiune scrisă, prealabilă, din partea societății.</p>
            
            <p>Este permisă crearea limitată, revocabilă si neexclusivă a hiperlinkurilor către pagina de index a www.i-scoala.ro, atât timp cât această acțiune nu prezintă serviciul www.i-scoala.ro într-o lumină falsă, înșelătoare, derogatorie sau ofensivă. Nu puteți folosi logo-ul firmei sau alte proprietăți grafice, sau mărci ca parte a hyperlinkurilor fără a deține o permisiune scrisă, prealabilă, din partea societății.</p>
            
            <h2 className="text-2xl font-semibold text-navy">Înregistrarea ca utilizator</h2>
            <p>Site-ul www.i-scoala.ro poate fi accesat în mod gratuit, iar simpla navigare în paginile acestuia nu este condiționată de înregistrarea ca utilizator (crearea unui cont de utilizator pe site). Pentru a beneficia însă de anumite servicii oferite de site, precum achiziționarea cursurilor oferite de acesta, primirea newsletterului www.i-scoala.ro sau verificarea situației unor cursuri proprii, va trebui să vă înregistrați ca utilizator (să va creați un cont de utilizator pe site). Înregistrarea ca utilizator presupune acceptarea prealabilă de către dvs. a Termenilor și Condițiilor de utilizare a www.i-scola.ro și a Politicii de Confidențialitate a acestuia. Aceste reglementări constituie baza contractuală a raporturilor dintre utilizatori și societate.</p>
            
            <p>Întrucât prevederile Termenilor și Condițiilor de utilizare și ai Politicii de Confidențialitate pot fi modificate, vă rugăm să le revedeți periodic. În condițiile în care nu veți mai fi de acord cu prevederile acestora, vă rugam să nu mai accesați/folosiți serviciile www.i-scoala.ro.</p>

            <p>Dacă folosiți acest site, sunteți responsabili cu privire la păstrarea confidențialității datelor de acces în contul dvs. de utilizator, creat pe site și sunteți de acord să vă asumați responsabilitatea pentru toate activitățile efectuate din contul dvs. de utilizator, creat pe site.</p>

            <p>www.i-scoala.ro poate vinde cursurile adulților, care sunt autorizați să efectueze plăți online cu cardul sau prin orice altă metodă de plată acceptata de www.i-scoala.ro. Dacă aveți mai puțin de 16 (șaisprezece) ani, puteți achiziționa cursurile www.i-scoala.ro, numai cu ajutorul unui părinte sau tutore.</p>

            <p>www.i-scoala.ro iși rezervă dreptul de a închide conturi de utilizatori, de a modifica sau elimina texte, imagini, hyperlinkuri, sau de a refuza vânzarea de produse, la propria sa discreție.</p>

            <h2 className="text-2xl font-semibold text-navy">Prelucrarea datelor cu caracter personal</h2>
            <p>Prin înregistrarea ca utilizator al www.i-scoala.ro vă vom solicita o serie de date personale, precum numele si prenumele, adresa de email, data nașterii dar si alte informații cu caracter personal, care să permită identificarea dvs. ca utilizator al serviciului www.i-scoala.ro. De asemenea, pentru a vă abona la newsletterul sau alertele www.i-scoala.ro va trebui să ne comunicați o adresă de e-mail validă precum și alte date legate de dvs.</p>

            <p>Conform cerințelor Legii nr. 677/2001 pentru protecția persoanelor cu privire la prelucrarea datelor cu caracter personal și libera circulație a acestor date, modificată și completată, i-TEACHER PROJECTS S.R.L. are obligația de a administra în condiții de siguranță și numai pentru scopurile specificate, datele personale pe care ni le furnizați despre dumneavoastră.</p>

            <p>Scopul colectării datelor este: informarea utilizatorilor / clienților (cumpărătorilor) privind situația contului lor de pe i-scoala.ro, evaluarea cursurilor oferite, activități comerciale, de promovare a cursurilor, de marketing, de publicitate, de media, administrative, de dezvoltare, de cercetare de piață, de statistică, de urmărire și monitorizare a vânzărilor și comportamentul consumatorului.</p>

            <p>Prin completarea datelor dvs. în formularul de creare de cont și/sau de comandă declarați că acceptați necondiționat că datele dvs. personale să fie incluse în baza de date a i-TEACHER PROJECTS S.R.L., și vă dați acordul expres si neechivoc că toate aceste date personale să fie stocate, utilizate și prelucrate nelimitat teritorial și/sau temporar de către i-TEACHER PROJECTS S.R.L. Datele dumneavoastră nu vor fi transferate în străinătate.</p>

            <p>Prin citirea prezentelor Termene si Condiții ați luat la cunoștință faptul că vă sunt garantate drepturile prevăzute de lege, respectiv dreptul de informare, dreptul de acces la date, dreptul de intervenție, dreptul de opoziție, dreptul de a nu fi supus unei decizii individuale, dreptul de se adresa justiției în caz de încălcare a drepturilor sale garantate de Legea 677/2001 pentru protecţia persoanelor cu privire la prelucrarea datelor cu caracter personal şi libera circulaţie a acestor date. Totodată, aveți dreptul de a vă opune prelucrării datelor dvs. personale și de a solicita ștergerea totală sau parțial a acestora.</p>

            <p>I-scoala.ro nu promovează SPAM-ul. Orice utilizator/client care a furnizat explicit adresa sa de email pe site-ul i-scoala.ro poate opta pentru ștergerea acesteia din baza noastră de date.</p>

            <p>Informațiile pe care ni le furnizați vor fi utilizate în scopul pentru care le-ați furnizat, pentru a administra, a sprijini și a evalua serviciile noastre și a preîntâmpina încălcarea securității, a legii și a termenilor noștri contractuali.</p>

            <p>De asemenea, i-TEACHER PROJECTS S.R.L. poate furniza datele dumneavoastră cu caracter personal altor companii cu care se află în relații de parteneriat, dar numai în temeiul unui angajament de confidențialitate din partea acestora, prin care garantează că aceste date sunt păstrate în siguranță și că furnizarea acestor informații personale se face conform legislației în vigoare, după cum urmează: furnizori de servicii de marketing, servicii de plata / bancare, sau alte servicii. Informațiile dumneavoastră cu caracter personal pot fi furnizate și către parchet, poliție, instanțele judecătorești și altor organe abilitate ale statului, în baza și în limitele prevederilor legale și ca urmare a unor cereri expres formulate.</p>

            <h3 className="text-xl font-semibold text-navy">Notificarea de confidențialitate</h3>

            <p>Confidențialitatea datelor este importantă pentru i-TEACHER PROJECTS S.R.L. și dorim să fim deschiși și transparenți în privința prelucrării datelor dvs. cu caracter personal.</p>

            <h4 className="text-lg font-semibold text-navy">Operatorul datelor cu caracter personal</h4>

            <p>i-TEACHER PROJECTS S.R.L. este operatorul datelor cu caracter personal pe care ni le transmiteți și răspunde de datele dumneavoastră cu caracter personal în conformitate cu legislația aplicabilă privind protecția datelor.</p>

            <h4 className="text-lg font-semibold text-navy">Acces la datele dumneavoastră</h4>

            <p>Datele dumneavoastră pot fi transmise în cadrul companiei i-TEACHER PROJECTS S.R.L. Nu transmitem, nu vindem și nu cedăm terților datele dumneavoastră în scopuri de marketing în afara companiei noastre. Datele transmise unor terți sunt utilizate numai pentru a putea avea acces la serviciile noastre.</p>

            <h4 className="text-lg font-semibold text-navy">Care sunt drepturile dumneavoastră?</h4>

            <p>Dreptul la acces:</p>

            <p>Aveți dreptul de a solicita informații cu privire la datele cu caracter personal pe care le deținem despre dumneavoastră.</p>

            <p>Dreptul la portabilitate:</p>

            <p>Aveți dreptul sa obțineți transferul unei copii a datelor dumneavoastră într-un format structurat folosit în mod frecvent și prelucrabile automat către dumneavoastră sau către o alta parte. Aceasta include numai datele cu caracter personal pe care ni le-ați trimis.</p>

            <p>Dreptul la rectificare:</p>

            <p>Aveți dreptul să solicitați rectificarea datelor dumneavoastră cu caracter personal, dacă acestea sunt incorecte, inclusiv dreptul de a completa datele cu caracter personal incomplete. Daca aveți un cont pe i-TEACHER PROJECTS S.R.L. puteți să vă editați datele cu caracter personal din contul dumneavoastră.</p>

            <p>Dreptul la ștergerea datelor:</p>

            <p>Aveți dreptul să ștergeți oricând orice date cu caracter personal prelucrate, cu excepția următoarelor situații:</p>

            <ul className="list-disc pl-5 mb-6">
              <li>aveți o datorie/comandă neplătită;</li>
              <li>daca ați efectuat o achiziție, vă vom păstra datele cu caracter personal în legătură cu tranzacția dumneavoastră conform legislației de contabilitate.</li>
            </ul>

            <p>Dreptul de a vă opune prelucrării bazate pe interes legitim:</p>

            <p>Aveți dreptul să vă opuneți prelucrării datelor dumneavoastră cu caracter personal bazate pe interesul legitim.</p>

            <p>Dreptul dumneavoastră de a vă opune marketingului direct:</p>

            <p>Aveți dreptul să vă opuneți marketingului direct, inclusiv analizei profilului în scopuri de marketing direct. Vă puteți dezabona de la marketingul direct prin următoarele mijloace:</p>

            <ul className="list-disc pl-5 mb-6">
              <li>urmând instrucțiunile din comunicarea de marketing;.</li>
            </ul>
            <h4 className="text-lg font-semibold text-navy">Actualizări ale Notificării de confidențialitate</h4>

            <p>S-ar putea să fie nevoie să ne actualizăm Notificarea de confidențialitate. Cea mai recentă versiune a Notificării de confidențialitate va fi disponibilă în permanență pe site-ul nostru.</p>

            <h3 className="text-xl font-semibold text-navy">Cumpărături online</h3>

            <p>Datele cu caracter personal sunt folosite pentru a gestiona achizițiile online pe www.i-scoala.ro, prelucrând comenzile prin intermediul serviciilor noastre online. De asemenea, utilizăm aceste informații pentru a vă contacta și/sau trimite notificări privind comanda și gestiona plățile, ca și a trata reclamațiile.</p>

            <h4 className="text-lg font-semibold text-navy">Tipuri de date cu caracter personal prelucrate:</h4>

            <p>Următoarele categorii de date cu caracter personal sunt prelucrate</p>

            <ul className="list-disc pl-5 mb-6">
              <li>informații de contact (ex: nume, adresa, adresa de e-mail și numărul de telefon)</li>
              <li>informații despre plăti și istoricul plăților;</li>
              <li>informații despre comenzi sau istoricul acestora, în cazul în care sunteți înregistrat pe site.</li>
            </ul>
            <h4 className="text-lg font-semibold text-navy">Acces la datele dumneavoastră cu caracter personal</h4>

            <p>Datele dvs. cu caracter personal transmise unor terți sunt folosite numai pentru a vă putea oferi serviciile menționate mai sus, pentru procesarea plăților de către furnizorii de servicii de procesare a plăților și altele.</p>

            <h4 className="text-lg font-semibold text-navy">Pentru cât timp vă salvam datele?</h4>

            <p>Datele sunt păstrate atât timp cât sunteți un client activ.</p>

            <h3 className="text-xl font-semibold text-navy">Marketing direct și comunicare</h3>

            <h4 className="text-lg font-semibold text-navy">De ce folosim datele dumneavoastră cu caracter personal?</h4>

            <p>Folosim datele cu caracter personal pentru a vă trimite oferte de marketing, sondaje privind informațiile și invitații prin e-mail, mesaje text, apeluri telefonice și comunicări prin poștă.</p>

            <p>Pentru a vă optimiza experiența, vă vom oferi informații relevante, recomandări de cursuri, remindere despre cursurile rămase în coșul dumneavoastră de cumpărături sau oferte personalizate. Toate aceste acțiuni se bazează pe comenzile anterioare, pe articolele pe care ați făcut click și pe informațiile pe care le-ați trimis.</p>

            <h4 className="text-lg font-semibold text-navy">Ce tipuri de date cu caracter personal colectăm?</h4>

            <p>Vom prelucra următoarele categorii de date cu caracter personal:</p>

            <ul className="list-disc pl-5 mb-6">
              <li>informații de contact (ex: adresa de e-mail, numărul de telefon)</li>
              <li>cursuri și oferte pe care le-ați accesat.</li>
            </ul>
            <h4 className="text-lg font-semibold text-navy">Acces la datele dumneavoastră cu caracter personal</h4>

            <p>Datele transmise unor terți sunt utilizate numai pentru a vă furniza serviciile menționate mai sus, iar cele transmise agențiilor media și furnizorilor tehnici vizează distribuirea marketingului direct fizic si digital. Nu transmitem, nu vindem și nu cedăm terților datele dumneavoastră în scopuri de marketing în afara companiei i-TEACHER PROJECTS S.R.L.</p>

            <h4 className="text-lg font-semibold text-navy">Temeiul juridic pentru prelucrarea datelor cu caracter personal</h4>

            <p>Prelucrarea datelor cu caracter personal se bazează pe consimțământul dumneavoastră atunci când sunteți de acord cu marketingul direct.</p>

            <h4 className="text-lg font-semibold text-navy">Dreptul de a vă retrage consimțământul:</h4>

            <p>Aveți dreptul de a va retrage în orice moment consimțământul privind prelucrarea datelor cu caracter personal, însă nu veți mai avea acces la informații despre noutăți, promoții etc.</p>

            <p>Va puteți dezabona de la marketingul direct prin următoarele mijloace:</p>

            <ul className="list-disc pl-5 mb-6">
              <li>urmând instrucțiunile din fiecare mesaj de marketing</li>
            </ul>
            <h4 className="text-lg font-semibold text-navy">Pentru cât timp vă salvăm datele?</h4>

            <p>Vom păstra datele dumneavoastră pentru marketing direct până când vă retrageți consimțământul.</p>

            <h2 className="text-2xl font-semibold text-navy">Procedura de cumpărare</h2>
            <p>Pentru a cumpăra și intra în posesia cursurilor oferite spre vânzare pe www.i-scoala.ro este necesară parcurgerea următoarelor etape:</p>

            <ul className="list-disc pl-5 mb-6">
              <li>identificarea si alegerea cursurilor</li>
              <li>înregistrarea dvs. ca utilizator al www.i-scoala.ro</li>
              <li>efectuarea plății produselor. Plata se efectuează online sau prin transfer bancar/ordin de plată, în condițiile reglementate la Capitolul VII, iar costul final va conține prețul cursului comandat cu TVA inclus și, dacă este cazul, prețul timbrului verde, în conformitate cu dispozițiile HG 448/2005.</li>
            </ul>
            <p>Prin lansarea unei comenzi electronice pe www.i-scoala.ro, sunteți de acord cu forma de comunicare (prin e-mail) prin care site-ul își derulează operațiunile. În cazul în care există solicitări suplimentare sau reclamații privitoare la comenzi, cursuri sau alte proceduri, acestea trebuie transmise în scris, pe adresa contact@i-scoala.ro. Vă rugăm să ne acordați timp pentru documentarea celor semnalate înainte de a vă răspunde.</p>

            <h2 className="text-2xl font-semibold text-navy">Politica de livrare a produselor</h2>
            <p>Fiecare produs comandat/procurat pe site va fi livrat după ce plata a fost finalizată, conform descrierii de pe pagina produsului. Mai multe detalii despre livrare găsiți pe pagina dedicată produsului respectiv.</p>

            <h2 className="text-2xl font-semibold text-navy">Politica de retur</h2>
            <p>În cazul în care doriți să anulați o comandă, trebuie doar să ne notificați prin email la adresa: contact@i-scoala.ro.</p>
            <p>Nu se percepe comision pentru anularea comenzilor. În funcție de modalitatea de plată aleasă, returnarea banilor se va efectua în 5-15 zile lucrătoare.</p>

            <h2 className="text-2xl font-semibold text-navy">Prețurile</h2>
            <p>Cu excepția cazurilor în care este prevăzut altfel, prețurile cursurilor afișate pe www.i-scoala.ro reprezintă prețurile finale de cumpărare și includ TVA (taxa pe valoare adăugată de 19%, valabilă în Romania). Prețurile finale de cumpărare pot fi prețuri sugerate de către producători sau furnizori, sau pot fi estimate în funcție de prețurile standard practicabile la nivelul industriei produsului comercializat. Prețurile finale de cumpărare pot să nu reprezinte cele mai competitive prețuri de pe un anumit segment de produse sau pentru o anumită perioadă. Acest articol menționează preferatul tău la prețuri super mici. Alegeți dintre livrarea în aceeași zi, livrarea cu mașina sau ridicarea comenzii. Datorită partenerilor noștri, puteți găsi online pentru a se potrivi fiecărei preferințe și buget, https://www.fakewatch.is/ de la buget la modele super elegante de vârf.</p>

            <h3 className="text-xl font-semibold text-navy">Metode de plată</h3>

            <p>Pentru efectuarea plății cursurilor comandate, există o metodă de plată: transfer bancar/ordin de plată. Pentru plata prin transferul bancar/ordin de plată, următorul ecran vă mulțumește pentru comanda plasată și vă oferă informațiile relevante pentru comanda si plată. Aceste informații le veți primi și prin e-mail, sub forma unei facturi (detalii în cap. 7.2.1).</p>

            <h3 className="text-xl font-semibold text-navy">Cum cumpăr și plătesc cursuri de pe site-ul www.i-scoala.ro prin transfer bancar/ordin de plată?</h3>

            <p>Puteți cumpăra produse prin www.i-scoala.ro urmând 3 pași:</p>

            <ul className="list-disc pl-5 mb-6">
              <li>Selectați cursul pe care doriți să-l achiziționați și apăsați pe linkul “Cumpără acum”.</li>
              <li>Introduceți/confirmați datele dvs. personale.</li>
            </ul>
            <p>Aceste informații sunt necesare pentru procesarea corectă și eficientă a comenzii plasate de către dvs. Vă rugăm să completați corect formularul și să indicați persoanele către care se face facturarea. Metoda de plată transfer bancar/ordin de plată, veți primi prin e-mail o factura cu toate datele privitoare la comanda dvs., următorul pas fiind efectuarea plății în cel mai scurt termen. În procesul efectuării plății prin transfer bancar/ordin de plată, trebuie să menționați la secțiunea detalii de plată a ordinului de plată, numărul facturii primite prin e-mail, care reprezintă confirmarea comenzii plasate. După efectuarea plății prin transfer bancar/ordin de plată, vă rugam să ne trimiteți o confirmare de plată la adresa contact@i-scoala.ro, în maximum 24 de ore.</p>

            <h2 className="text-2xl font-semibold text-navy">Garanție și service post-vânzare</h2>
            <p>Pentru orice detalii legate de garanție vă rugăm să contactați departamentul de vânzări la adresa de e-mail: contact@i-scoala.ro.</p>

            <h2 className="text-2xl font-semibold text-navy">Recenzii, comentarii, comunicări și alte tipuri de conținut</h2>
            <p>Utilizatorii pot posta recenzii, comentarii sau alte tipuri de conținut atât timp cat conținutul acestora nu este ilegal, obscen, amenințător, defăimător, nu încalcă dreptul la intimitate sau legea cu privire la protejarea proprietății intelectuale; nu conține viruși informatici, comunicări comerciale, politice, care instigă la ură sau intoleranță pe motive etnice, religioase, rasiale, de orientare sexuală, mesaje colective sau alte forme de spam. Societatea are dreptul de a modifica, reproduce, transmite, adapta, publica, distribui materialele postate de către utilizatori, prin orice mijloc de comunicare în masă, din orice țară. Prin postarea de recenzii, comentarii, comunicări și alte tipuri de conținut pe www.i-scoala.ro, cedați dreptul societății de a folosi numele dvs. în relație cu materialele postate; garantați că dețineți sau controlați într-o altă formă, dreptul de proprietate intelectuală asupra materialelor pe care le postați; că materialele postate nu violează nici una dintre condițiile de postare ale recenziilor, comentariilor, comunicărilor și alte forme de conținut din partea utilizatorilor, ale www.i-scoala.ro.</p>

            <p>www.i-scoala.ro are dreptul, dar nu obligația de a monitoriza, edita sau șterge, orice tip de conținut sau activități ale utilizatorilor pe site. www.i-scoala.ro nu este responsabil și nu își asumă responsabilitatea pentru nici unul dintre materialele postate de către alte terțe părți pe site. www.i-scoala.ro are dreptul de a nu publica toate comentariile și articolele propuse de către utilizatori.</p>

            <h2 className="text-2xl font-semibold text-navy">Forța Majoră</h2>
            <p>www.i-scoala.ro, afiliații sau/și în general furnizorii de cursuri sau servicii către www.i-scoala.ro nu pot fi făcuți responsabili pentru nici o întârziere sau eroare rezultând direct sau indirect din cauze care nu depind de voința www.i-scoala.ro. Aceasta exonerare include, dar nu se limitează la: erorile de funcționare a echipamentului tehnic de la www.i-scoala.ro, lipsa funcționării conexiunii la internet, lipsa funcționării conexiunilor de telefon, virușii informatici, accesul neautorizat in sistemele www.i-scoala.ro, erorile de operare, precum și cazurile de forță majoră stipulate de legislația română în vigoare.</p>

            <h2 className="text-2xl font-semibold text-navy">Publicitatea</h2>
            <p>www.i-scoala.ro poate afișa în paginile sale, reclame la produsele din oferta sa precum și la cursuri ori servicii aparținând terților. Prin utilizarea www.i-scoala.ro și prin acceptarea Termenilor și Condițiilor de utilizare ale acestuia și a Politicii de confidențialitate, vă exprimați în mod direct acceptul de a fi destinatarul acestor comunicări cu caracter comercial.</p>

            <h2 className="text-2xl font-semibold text-navy">Reclamații privind încălcarea legii referitoare la protejarea proprietății intelectuale</h2>
            <p>www.i-scoala.ro respectă dreptul la proprietatea intelectuală a terților. Daca ați observat că site-ul conține informații care încalcă dreptul acestora la proprietate intelectuală, vă rugăm să ne trimiteți o înștiințare la adresa de email: contact@i-scoala.ro, sau să ne contactați la numărul de telefon, sau la adresa de corespondență, afișate la capitolul Despre noi din prezentul contract.</p>

            <h2 className="text-2xl font-semibold text-navy">Legislația aplicabilă</h2>
            <p>Serviciile oferite de societate prin intermediul www.i-scoala.ro sunt guvernate de dispozițiile legilor române, cu precădere de Legea 365/2002 privind comerțul electronic, Ordonanța 130/2000 privind protecția consumatorilor la încheierea și executarea contractelor la distanță, HG 448/2005 și Directiva Europeana EC/96/2002, care reglementează regimul taxei pentru timbrul verde, aplicabil produselor electronice.</p>

            <p>Termenii și condițiile www.i-scoala.ro se supun legislației române. În caz de litigiu, se va încerca mai întâi o rezolvare pe cale amiabila, în termen de 30 de zile lucrătoare de la înregistrarea reclamației la sediul i-TEACHER PROJECTS S.R.L. În cazul în care nu se poate ajunge la o înțelegere în termenul precizat anterior, litigiile dintre Părți se vor supune rezolvării instanțelor judecătorești competente din România.</p>

            <h2 className="text-2xl font-semibold text-navy">Prezentarea ofertei</h2>
            <p>i-TEACHER PROJECTS S.R.L. își rezervă dreptul de a opera oricând, orice modificări asupra prețurilor și datelor tehnice prezente pe site-ul www.i-scoala.ro, fără o înștiințare prealabilă. Datele tehnice prezente pe site-ul www.i-scoala.ro au caracter informativ și nu reprezintă o obligație contractuală.</p>

            <h2 className="text-2xl font-semibold text-navy">Cookies</h2>
            <p>Un cookie este un mic fișier text care se salvează pe calculatorul sau pe dispozitivul dumneavoastră mobil și, în timpul vizitelor ulterioare, este recuperat din acestea. Daca utilizați serviciile noastre, vom presupune că sunteți de acord cu utilizarea unui astfel de cookie.</p>

            <h3 className="text-xl font-semibold text-navy">Cum folosim cookie-urile?</h3>

            <p>Utilizăm cookie-uri permanente pentru a stoca pagina de start și detaliile dumneavoastră daca selectați „Tine-mă minte” atunci când vă conectați la site. Vom folosi cookie-uri pentru a vă salva cursurile favorite.</p>

            <p>Utilizam cookie-uri pentru o sesiune, de exemplu, atunci când folosiți funcția de filtrare a cursurilor, pentru a verifica dacă sunteți conectat sau daca ați adăugat un articol în coșul de cumpărături.</p>

            <p>Folosim cookie-uri proprii și terțe pentru a colecta statistici și date ale utilizatorilor în formă agregată și individuală în instrumente de analiză pentru a ne optimiza site-ul și pentru a vă oferi materiale de marketing relevante. Unele cookie-uri terțe sunt setate de servicii care apar pe paginile noastre și sunt în afara controlului nostru. De asemenea, folosim cookie-uri terța parte care urmăresc activitatea pe mai multe site-uri pentru a va oferi marketing pe alte site-uri/canale.</p>

            <h3 className="text-xl font-semibold text-navy">Cine are acces la datele dumneavoastră cu caracter personal?</h3>
            
            <p>Datele transmise unor terți sunt utilizate numai pentru a vă oferi serviciile menționate mai sus, un instrument de analiza este folosit pentru a colecta statistici în scopul optimizării site-ului nostru și pentru a vă prezenta materiale relevante. Informațiile conținute în acest site, precum: imagini, grafică, poze, clipuri video, texte și alte materiale care apar postate au caracter informativ și orientativ și pot suferi modificări.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
