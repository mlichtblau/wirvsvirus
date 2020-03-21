# COVID Q

Eine Plattform für die Entlastung der Testzentren in Deutschland. Auf Basis einer Eigen-Anamnese wird Patienten eine Liste verfügbarer Testzentren gezeigt. Dabei können die geschätzten Wartzeiten und die Auslastung der Testzentren eingesehen werden. Nachdem man sich auf eine Warteliste gesetzt hat, können Mitarbeiter des Testzentrums Informationen und geänderete Öffnungs- und Schließzeiten verschicken. Patienten können zu Hause warten bis kurz vor ihrem Test. Mit Hilfe von Push-Benachrichtigungen werden sie über ihren Wartelistenstatus kontinuierlich auf dem Laufenden gehalten.

| ![Screenshot 1](docs/screen-1.png) 	| ![Screenshot 2](docs/screen-2.png) 	| ![Screenshot 3](docs/screen-3.png) 	|
|------------------------------------	|------------------------------------	|------------------------------------	|

## Ziele

### Kurzer Weg zum Test

Zunächst findet ein **Telefonat mit oder ein Gang zum Arzt** statt. Dieser prüft, ob es sich um eine Infektion mit SARS-CoV-19 handeln könnte. Im Verdachtsfall ruft man bei der Hotline 116117 an.

Bei der Hotline **116117** wird der Patient zu seinem Kontakt mit positiv getesteten Personen und seinen Aufenthalt in Risikogebieten. Aufgrund der hohen Nachfrage und diversen Telefonschleifen, kann sich dieser Prozess leider über wenige Stunden und mehrere Telefonate erstrecken. Stellt sich bei dem Online-Telefonat ein dringender Infektionsverdacht heraus, erhält der Patient eine PIN und wartet auf einen Rückruf durch ein Testzentrum.

Das **Testzentrum** meldet sich innerhalb weniger Tage um einen kurzfristigen Termin zu vereinbaren.

Unsere **Plattform möchte Ärzte, Beratungsstellen und Betroffene Personen enlasten**, indem sich Patienten nach einer [Eigen-Anamnese](#wie-läuft-der-eigen-anmenese-ab) auf die Warteliste eines Testzentrums setzen können. Die Patienten werden anschließend von Beratern der Hotline oder medizinischem Personal des Testzentrums geprüft und es kann eine Terminvergabe verneinbart werden. Betroffene können ihren Wartelistenstatus zu jeder Zeit online abrufen. Die Plattform filtert automatisch Personen aus, für die die Notwendigkeit eines Tests nicht besteht. Die Entscheidungen werden auf Basis der Eigen-Anamnese gefällt.

## FAQ

### Erhält jeder Patient in der Plattform einen Termin für einen Test?

Nein. Auf Basis der Eigen-Anamnese des Patienten und den Anforderungen der Testzentren filtern wir die Patienten, die sich zunächst bei einem Hausarzt oder der Hotline 116117 melden sollten. In unbegründeten Fällen bieten wir dem Patienten weitere Quellen zur Einschätzung der eigenen Situation. Die Eigen-Anamnese soll auch abfragen, ob der Betroffene bereits ein Arztgespräch hatte und eine Überweisung zu einem Test erhalten hat.

Des Weiteren sollen die Angaben der Patienten auf Wartelisten vor ihrem Test durch medizinischen Personal geprüft werden. Damit wollen wir in einer zweiten Instanz die Patienten aussortieren, für die kein Test in Frage kommt. Auch in diesem Fall soll der Patient auf Quellen zur freiwilligen Selbst-Quarantäne und rund um das Virus verwiesen werden..

### Wie läuft der Eigen-Anmenese ab?

Die Eigen-Anamnese von COVID Q ist and die der [Charité app](https://covapp.charite.de) angelehnt. Wir fragen die Symptome, den Reiseverlauf und den Kontakt zu Risikopersonen ab. Des Weiteren fragen wir nach bisherigen Arzt- bzw. Krankenhausbesuchen und nach dort ausgestellten Überweisungen. Diese Daten verwenden wir zur Auswahld der qualifizierten Testzentren.

### Kann man sich auf mehrere Wartelisten setzen?

Nein. Ein Patient kann sich nur auf eine Warteliste setzen. Er kann auch nur die Testzentren auswählen, die im Rahmen seiner Eigen-Anamnese als _qualifiziert_ eingestuft wurden. Nachdem ein Patient sich auf einer Warteliste registriert hat, erhält er regelmäßige Updates zu seinem Teststatus.

Er kann sich bei Bedarf in einem anderen Testzentrum anmelden, wodurch jedoch sein aktueller Wartelistenplatz verfällt.

## Rollen

Unsere Plattform verbindet Patienten mit Testzentren und offiziellen Anlaufstellen rund um SARS-CoV-2. Die Termine zum Testen sollen zentral verwaltet und zugewiesen werden um Betroffenen Zeit zu sparen und Transparenz zu schaffen. Des Weiteren sollen betroffene Personen mit Informationsmaterialien gebildet werden.

### Patienten

Patienten haben den Verdacht sich mit dem Virus infiziert zu haben. Sie haben sich entweder in einem Risikogebiet befunden oder direkten Kontakt zu einer erkrankten Person gehabt zu haben.

Sie können in **COVID Q** ihre Symptome beschreiben und erhalten eine Liste qualifizierter Testzentren. Anschließent können sies ich auf die Warteliste eines Testzentrums setzen. Über die Warteliste können Wartezeiten und Auslastungen von Testzentren eingesehen werden.

### Testzentren

Patienten können sich in diversen Testzentren in Deutschland auf SARS-CoV-2 testen lassen.

#### Verantwortliche und Leiter

Verantwortliche von Testzentren können Informationen zur Kapazität, den Anforderungen und den Möglichen Tests ihres Zentrums hinterlegen. Auf Basis dieser Daten werden dem Patienten nach der Eigen-Anamnese verfügbare und passende Testzentren vorgeschlagen.

Nachrichten über Verspätungen oder Zwischenfälle können mittels Push-Benachrichtigungen an alle wartenden Patienten geschickt werden.

#### Mitarbeiter

tba

### Offizielle Verwaltung von Bund, Ländern und Organisationen

Verbände, Organisationen, Länder und der Bund können die Testzentren in Deutschland zentral verwalten. Neue Zentren können unkompliziert registriert werden und den Patienten nach ihrer Eigen-Anamnese vorgeschlagen werden. Durch die Prüfung durch offizielle Stellen werden unseriöse Tesstellen gefiltert.
