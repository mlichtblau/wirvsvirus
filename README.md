# COVID Q

Eine Plattform für die Entlastung der Testzentren in Deutschland. Auf Basis einer Eigen-Anamnese wird Patienten eine Liste verfügbarer Testzentren gezeigt. Dabei können die geschätzten Wartzeiten und die Auslastung der Testzentren eingesehen werden. Nachdem man sich auf eine Warteliste gesetzt hat, können Mitarbeiter des Testzentrums Informationen und geänderete Öffnungs- und Schließzeiten verschicken. Patienten können zu Hause warten bis kurz vor ihrem Test. Mit Hilfe von Push-Benachrichtigungen werden sie über ihren Wartelistenstatus kontinuierlich auf dem Laufenden gehalten.

| ![Screenshot 1](docs/screen-1.png) 	| ![Screenshot 2](docs/screen-2.png) 	| ![Screenshot 3](docs/screen-3.png) 	|
|------------------------------------	|------------------------------------	|------------------------------------	|

## Ziele

### Identifizieren von Verdachtspersonen ohne Aufwand

Aufgrund der Omnipräsenz des SARS-CoV-19 Virus in den Medien haben viele Menschen die Angst, sie könnten sich mit dem Virus infiziert haben. Dabei informieren sich viele über den ärztlichen Bereitschaftsdienst unter **116117**, lokalen Beratungsstellen oder beim Arzt des Vertrauens. Die Anlaufstellen sind aufgrund der hohen Nachfrage maximal ausgelastet und Ärzte können im Fall anderer Beschwerden nicht mehr verlässlich kontaktiert werden.

Die Plattform **COVID Q** vermittelt Patienten mit Verdacht auf eine Infektion an die Testzentren in Deutschland. Dabei findet zunächst eine Eigen-Anamnese statt, wie sie auch durch eine telefonische Beratungsstelle oder den Arzt stattfindet. Auf Basis aktueller Empfehlungen vermittelt die Plattform Verdachtsfälle an qualifizierte Testzentren in der Nähe. Falls die Notwendigkeit auf einen Test aufgrund der Eigen-Anamnese nicht gegeben ist, werden Links zu öffentlichen Beratungstellen und Tipps zum Eigenschutz bereitgestellt. Damit sollen die Beratungsstellen und Ärzte entlastet und besorgte Menschen aufgeklärt werden.

### Unbürokratisch zum Test bei Verdacht

Im Falle eines begründeten Verdachtes auf eine Infektion mit SARS-CoV-19 - z.B. falls sich die Person in einem Risikogebiet befunden oder direkten Konakt mit einer positiv getesteten Person gehabt hat -, kann die betroffene Person sich auf die Warteliste eines Testzentrums setzen. Das Testzentrum erhält auch einen Zugang zur Plattform. Über diesen Zugang können die Wartelisten und auch die Daten zu den Patienten abgerufen werden. Das medizinische Personal kann Nachrichten an alle Patienten der Warteliste schicken und Informationsmaterialen wie zum Beispiel Anfahrtsbeschreibungen oder Verhaltensregeln veröffentlichen. Patienten haben mit **COVID Q** nur noch eine Anlaufstelle und müssen nicht stundenlang in Telefon-Warteschleifen verbringen. Die Daten werden zw. dem Testzentrum und dem Patienten direkt geteilt, sodass möglichst wenige Personin mit der Bearbeitung eines Falles beschäftigt sind.

Das medizinsche Personal des Testzentrums kann die Patienten auf der Warteliste prüfen und die Notwendigkeit auf einen Test in einer zweiter Instanz prüfen.

### Dynamische Terminvergabe

Die meisten Testzentren in Deutschland vergeben Termine und Verdachtsfälle auf das Virus zu testen. Das ist zum Einen mit einem hohen Bearbeitungsaufwand verbunden und zum Anderen unflexibel im Fall von Verzögerungen. Falls Termin auflaufen, stauen sich auch die Personen im Testzentrum, wodurch sich eine Gruppe potentiell ansteckender Personen bildet. 

Die Plattform erfasst den Bearbeitungsstatus aller in der Warteliste stehenden Patienten. Über Echtzeitdaten können die Patienten ihre geschätzte Wartedauer jederzeit einsehen und werden wenige Stunden vor dem Test informiert, sich zur Teststelle zu begeben. Damit werden auflaufenden Personengruppen vermieden und die Gefahr einer Ansteckung Anderer in vollen Wartezimmern reduziert. 

Wir glauben, dass dieses Konzept flexibler als die klassische Terminvergabe ist und durch permantente Transparenz keinen Nachteil für die Patienten bildet.

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
