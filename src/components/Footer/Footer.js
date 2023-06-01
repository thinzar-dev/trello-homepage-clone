import React from 'react'

const Footer = () => {
    return (
        <div className='footer'>
            <section>
                <div className='footer-container'>
                    <div className='footer-wrapper'>
                        <div className='footer-logo-section'>
                            <div className='footer-logo-row'>
                                <svg aria-label="Atlassian Trello" fill="#ffffff" height="105" role="img" viewBox="0 0 312 105" width="312" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className='logo-svg'>
                                    <defs><linearGradient id="trello-logo-gradient-white" x1="49.992%" x2="49.992%" y1="100%" y2=".016%"><stop offset="0%" stop-color="#ffffff" stop-opacity=".5"></stop><stop offset="15%" stop-color="#ffffff" stop-opacity=".65"></stop><stop offset="30%" stop-color="#ffffff" stop-opacity=".78"></stop><stop offset="46%" stop-color="#ffffff" stop-opacity=".88"></stop><stop offset="62%" stop-color="#ffffff" stop-opacity=".95"></stop><stop offset="80%" stop-color="#ffffff" stop-opacity=".99"></stop><stop offset="100%" stop-color="#ffffff"></stop></linearGradient></defs>
                                    <path d="M42.6 5.2 42.6 17.3 28.3 17.3 28.3 63 14.5 63 14.5 17.2.2 17.2.2 5.2z" transform="translate(87 40)"></path>
                                    <path d="M60.2,63 L47.5,63 L47.5,18 L60.2,18 L60.2,26.6 C62.6,20.5 66.5,16.9 73.4,17.4 L73.4,30.7 C64.4,30 60.2,32.2 60.2,39.4 L60.2,63 Z" transform="translate(87 40)"></path>
                                    <path d="M143,63.4 C134.6,63.4 129.4,59.4 129.4,49.9 L129.4,0.6 L142.2,0.6 L142.2,48.1 C142.2,50.8 144,51.8 146.2,51.8 C146.8,51.8 147.5,51.8 148.1,51.7 L148.1,62.8 C146.4,63.2 144.7,63.4 143,63.4 L143,63.4 Z" transform="translate(87 40)"></path>
                                    <path d="M169.8,63.4 C161.4,63.4 156.2,59.4 156.2,49.9 L156.2,0.6 L169,0.6 L169,48.1 C169,50.8 170.8,51.8 173,51.8 C173.6,51.8 174.3,51.8 174.9,51.7 L174.9,62.8 C173.2,63.2 171.5,63.4 169.8,63.4 L169.8,63.4 Z" transform="translate(87 40)"></path>
                                    <path d="M181,40.5 C181,26.6 189,17.1 202.8,17.1 C216.6,17.1 224.4,26.6 224.4,40.5 C224.4,54.4 216.5,64.1 202.8,64.1 C189.1,64.1 181,54.3 181,40.5 Z M193.5,40.5 C193.5,47.3 196.3,52.6 202.8,52.6 C209.3,52.6 211.9,47.2 211.9,40.5 C211.9,33.8 209.1,28.5 202.8,28.5 C196.5,28.5 193.5,33.7 193.5,40.5 Z" transform="translate(87 40)"></path>
                                    <path d="M90.6,44.6 C94.2,45 97.8,45.2 101.3,45.2 C111.1,45.2 119.3,42.6 119.3,33.1 C119.3,23.9 110.8,17 100.6,17 C86.9,17 78.1,27 78.1,40.8 C78.1,55.2 85.7,63.8 102.8,63.8 C107.9,63.9 112.9,63 117.7,61.2 L117.7,50.4 C113.3,51.8 108.3,53.2 103.3,53.2 C96.5,53.3 91.8,51 90.6,44.6 L90.6,44.6 Z M100.4,26.9 C104,26.9 106.9,29.3 106.9,32.7 C106.9,37 102.3,38.4 97.1,38.4 C94.9,38.4 92.6,38.2 90.4,37.9 C90.6,35.8 91.2,33.8 92.2,31.9 C93.8,28.8 97,26.9 100.4,26.9 Z" transform="translate(87 40)"></path>
                                    <path fill="url(#trello-logo-gradient-white)" d="M55.3,40.6 L7.8,40.6 C3.7,40.6 0.4,43.9 0.4,48 L0.4,95.6 C0.4,99.7 3.7,103 7.8,103 L55.3,103 C59.4,103 62.7,99.7 62.7,95.6 L62.7,48 C62.7,43.9 59.4,40.6 55.3,40.6 Z M27.2,85.5 C27.2,86.9 26.1,88 24.7,88 L14.3,88 C12.9,88 11.8,86.9 11.8,85.5 L11.8,54.6 C11.8,53.2 12.9,52.1 14.3,52.1 L24.7,52.1 C26.1,52.1 27.2,53.2 27.2,54.6 L27.2,85.5 Z M51.2,71.3 C51.2,72.7 50.1,73.8 48.8,73.8 L38.3,73.8 C36.9,73.8 35.8,72.7 35.8,71.3 L35.8,54.6 C35.8,53.2 36.9,52.1 38.3,52.1 L48.7,52.1 C50.1,52.1 51.2,53.2 51.2,54.6 L51.2,71.3 Z"></path>
                                    <g opacity=".7">
                                        <path d="M98.9,16.7 C98.9,12.7 96.3,10.9 91.5,9.7 C88.5,8.9 87.8,8.3 87.8,7.3 C87.8,6.1 88.9,5.5 90.9,5.5 C93.3,5.6 95.7,6.2 97.9,7.3 L97.9,2.3 C95.8,1.3 93.4,0.8 91.1,0.8 C85.8,0.8 82.9,3.3 82.9,7.4 C82.9,11.3 85.5,13.3 89.9,14.3 C93,15 93.9,15.5 93.9,16.8 C93.9,17.8 93.2,18.6 90.9,18.6 C88.1,18.5 85.3,17.7 82.8,16.3 L82.8,21.6 C85.3,22.8 88,23.5 90.8,23.5 C96.2,23.5 98.9,20.8 98.9,16.7 L98.9,16.7 Z" transform="translate(94)"></path>
                                        <path d="M159.3 1.2 159.3 23.2 164 23.2 164 6.4 166 10.8 172.6 23.1 178.5 23.1 178.5 1.1 173.8 1.1 173.8 15.3 172 11.2 166.7 1.1 159.3 1.1z" transform="translate(94)"></path>
                                        <path d="M129.6 1.2 124.5 1.2 124.5 23.2 129.6 23.2z" transform="translate(94)"></path>
                                        <path d="M43.2 1.2 43.2 23.2 53.7 23.2 55.3 18.4 48.3 18.4 48.3 1.2z" transform="translate(94)"></path>
                                        <path d="M22.4 1.2 22.4 6 28.1 6 28.1 23.2 33.2 23.2 33.2 6 39.3 6 39.3 1.2z" transform="translate(94)"></path>
                                        <path d="M15,1.2 L8.3,1.2 L0.6,23.2 L6.5,23.2 L7.6,19.5 C8.9,19.9 10.3,20.1 11.7,20.1 C13.1,20.1 14.5,19.9 15.8,19.5 L16.9,23.2 L22.8,23.2 L15,1.2 Z M11.6,15.5 C10.6,15.5 9.7,15.4 8.8,15.1 L11.6,5.5 L14.4,15.1 C13.5,15.4 12.6,15.5 11.6,15.5 Z" transform="translate(94)"></path>
                                        <path d="M71.7,1.2 L65,1.2 L57.3,23.2 L63.2,23.2 L64.3,19.5 C65.6,19.9 67,20.1 68.4,20.1 C69.8,20.1 71.2,19.9 72.5,19.5 L73.6,23.2 L79.5,23.2 L71.7,1.2 Z M68.4,15.5 C67.4,15.5 66.5,15.4 65.6,15.1 L68.4,5.5 L71.2,15.1 C70.3,15.4 69.3,15.5 68.4,15.5 Z" transform="translate(94)"></path>
                                        <path d="M148,1.2 L141.3,1.2 L133.6,23.2 L139.5,23.2 L140.6,19.5 C141.9,19.9 143.3,20.1 144.7,20.1 C146.1,20.1 147.5,19.9 148.8,19.5 L149.9,23.2 L155.8,23.2 L148,1.2 Z M144.6,15.5 C143.6,15.5 142.7,15.4 141.8,15.1 L144.6,5.5 L147.4,15.1 C146.5,15.4 145.6,15.5 144.6,15.5 Z" transform="translate(94)"></path>
                                        <path d="M119.2,16.7 C119.2,12.7 116.6,10.9 111.8,9.7 C108.8,8.9 108.1,8.3 108.1,7.3 C108.1,6.1 109.2,5.5 111.1,5.5 C113.5,5.6 115.9,6.2 118.1,7.3 L118.1,2.3 C115.9,1.3 113.6,0.8 111.2,0.8 C105.9,0.8 103,3.3 103,7.4 C103,11.3 105.6,13.3 110,14.3 C113.1,15 114,15.5 114,16.8 C114,17.8 113.3,18.6 111,18.6 C108.2,18.5 105.4,17.7 102.9,16.3 L102.9,21.6 C105.4,22.8 108.1,23.5 110.9,23.5 C116.6,23.5 119.2,20.8 119.2,16.7 L119.2,16.7 Z" transform="translate(94)"></path>
                                    </g>
                                </svg>
                                <div className='footer-logo-login'>
                                    <a data-uuid="1FFBp4GJ8QVUHxiWea7wGL" href="/login" data-testid="login"><span>Log In</span></a>
                                </div>
                            </div>
                        </div>
                        <div className='footer-info-section'>
                            <ul className='footer-info-ul'>
                                <li>
                                    <a href="https://trello.com/about" data-uuid="7k1NZYpe6blkKmI7qo2UCv" data-testid="ui-nav-link" className='footer-info-link'>
                                        <p className='footer-info-link-title'>About Trello</p>
                                        <p className='footer-info-link-p'>What’s behind the boards.</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.atlassian.com/company/careers/trello" data-uuid="4r8SZSJfmA4x6EAO1jw9eK" data-testid="ui-nav-link" className='footer-info-link'>
                                        <p className='footer-info-link-title'>Jobs</p>
                                        <p className='footer-info-link-p'>Learn about open roles on the Trello team.</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://trello.com/platforms" data-uuid="2ZWkwhk6wBiZzCA3bXUH4H" data-testid="ui-nav-link" className='footer-info-link'>
                                        <p className='footer-info-link-title'>Apps</p>
                                        <p className='footer-info-link-p'>Download the Trello App for your Desktop or Mobile devices.</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://trello.com/contact" data-uuid="7ptPwcapCPwGgn3DOehuCa" data-testid="ui-nav-link" className='footer-info-link'>
                                        <p className='footer-info-link-title'>Contact us</p>
                                        <p className='footer-info-link-p'>Need anything? Get in touch and we can help.</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='footer-divider'></div>
            </section>
            <section>
                <div className='footer-container'>
                    <div className='footer-bottom-wrapper'>
                        <div className='lang-col'>
                            <form className='lang-form'>
                                <select>
                                    <option value="cs" data-uuid="cs_language">Čeština</option>
                                    <option value="de" data-uuid="de_language">Deutsch</option>
                                    <option value="en" data-uuid="en_language">English</option>
                                    <option value="es" data-uuid="es_language">Español</option>
                                    <option value="fr" data-uuid="fr_language">Français</option>
                                    <option value="it" data-uuid="it_language">Italiano</option>
                                    <option value="hu" data-uuid="hu_language">Magyar</option>
                                    <option value="nl" data-uuid="nl_language">Nederlands</option>
                                    <option value="nb" data-uuid="nb_language">Norsk (bokmål)</option>
                                    <option value="pl" data-uuid="pl_language">Polski</option>
                                    <option value="pt-BR" data-uuid="pt-BR_language">Português (Brasil)</option>
                                    <option value="fi" data-uuid="fi_language">Suomi</option>
                                    <option value="sv" data-uuid="sv_language">Svenska</option>
                                    <option value="vi" data-uuid="vi_language">Tiếng Việt</option>
                                    <option value="tr" data-uuid="tr_language">Türkçe</option>
                                    <option value="ru" data-uuid="ru_language">Русский</option>
                                    <option value="uk" data-uuid="uk_language">Українська</option>
                                    <option value="th" data-uuid="th_language">ภาษาไทย</option>
                                    <option value="zh-Hans" data-uuid="zh-Hans_language">中文 (简体)</option>
                                    <option value="zh-Hant" data-uuid="zh-Hant_language">中文 (繁體)</option>
                                    <option value="ja" data-uuid="ja_language">日本語</option>
                                </select>
                            </form>
                        </div>
                        <div className='copyright-col'>
                            <nav className='copyright-nav'>
                                <ul>
                                    <li><a href="https://www.atlassian.com/legal/privacy-policy" data-uuid="2ZmcaWjuP7RtH3eTqGS910" target="_blank" rel="noopener">Privacy Policy</a></li>
                                    <li><a href="https://www.atlassian.com/legal/cloud-terms-of-service" data-uuid="2Tg7ImeDzwnOR130X49eqh" target="_blank" rel="noopener">Terms</a></li>
                                    <li><button type="button" data-uuid="01xSqDwG0I1Ey6IalhmrDm" className='footer-cookie'>Cookie Settings</button></li>
                                    <li><span data-uuid="1wtqDRLmqlrlbzOFvTbT74">Copyright © 2023 Atlassian</span></li>
                                </ul>
                            </nav>
                        </div>
                        <div className='social-col'>
                            <div className='social-links'>
                                <a href="https://www.instagram.com/trelloapp/" title="Instagram" target="_blank" rel="noopener"><svg height="16" viewBox="0 0 16 16" width="16"><path d="m7.9365485 4.00948853c2.1378796 0 3.8773322 1.74591892 3.8773322 3.89174604 0 2.14582713-1.7394526 3.89174603-3.8773322 3.89174603-2.13787961 0-3.87703593-1.7459189-3.87703593-3.89174603 0-2.14582712 1.73915632-3.89174604 3.87703593-3.89174604zm0 1.39893537c-1.36946341 0-2.48357803 1.11825631-2.48357803 2.49281067 0 1.37455435 1.11411462 2.49281063 2.48357803 2.49281063 1.36975965 0 2.483578-1.11825628 2.483578-2.49281063 0-1.37455436-1.11381835-2.49281067-2.483578-2.49281067zm4.1036506-2.58676679c.5095127 0 .9227511.41477468.9227511.92618144 0 .5117041-.4132384.92647878-.9227511.92647878-.5098089 0-.9230474-.41477468-.9230474-.92647878 0-.51140676.4132385-.92618144.9230474-.92618144zm-7.31121058-1.33500953c-1.79099628 0-3.24784704 1.46226656-3.24784704 3.25992082v6.3093323c0 1.7976543 1.45685076 3.2599209 3.24784704 3.2599209h6.28566818c1.7909963 0 3.2481433-1.4622666 3.2481433-3.2599209v-6.3093323c0-1.79765426-1.457147-3.25992082-3.2481433-3.25992082zm6.28566818 14.31582152h-6.28566818c-2.60740146 0-4.72898852-2.1291766-4.72898852-4.7465684v-6.3093323c0-2.61739173 2.12158706-4.7465684 4.72898852-4.7465684h6.28566818c2.6076977 0 4.7292848 2.12917667 4.7292848 4.7465684v6.3093323c0 2.6173918-2.1215871 4.7465684-4.7292848 4.7465684z"></path></svg></a>
                                <a href="https://www.facebook.com/trelloapp/" title="Facebook" target="_blank" rel="noopener"><svg height="16" viewBox="0 0 8 16" width="8"><path d="m1.61157724 7.96343677v7.63998533c0 .1097869.08892957.199047.19830983.199047h2.82684468c.10938027 0 .19799997-.0892601.19799997-.199047v-7.76438973h2.04940817c.10287322 0 .1887042-.07930781.19738025-.18225245l.1970704-2.33942478c.00991549-.1160071-.08118309-.21584163-.19738026-.21584163h-2.24647856v-1.65986573c0-.38876376.31419714-.70412892.70183089-.70412892h1.57935189c.10969013 0 .19830983-.08926016.19830983-.19904704v-2.33942478c0-.11009789-.0886197-.19904704-.19830983-.19904704h-2.66850667c-1.56602795 0-2.83583059 1.27421209-2.83583059 2.8460617v2.25545181h-1.41326741c-.10938026 0-.19830983.08926015-.19830983.19904704v2.33942477c0 .10978689.08892957.19904705.19830983.19904705h1.41326741z"></path></svg></a>
                                <a href="https://www.linkedin.com/company/trello/" title="LinkedIn" target="_blank" rel="noopener"><svg height="16" viewBox="0 0 16 16" width="16"><g><path d="m3.36409209 14.2159091h-3.17642414v-9.59186348h3.17642414z"></path><path d="m1.77597952 3.31427557h-.0206972c-1.06590614 0-1.75528232-.7364835-1.75528232-1.65693805 0-.94122869.71047144-1.65733752 1.79707473-1.65733752 1.08660338 0 1.75528236.71610883 1.77597957 1.65733752 0 .92045455-.68937619 1.65693805-1.79707478 1.65693805z"></path><path d="m14.8176077 14.2159091h-3.1760261v-5.13141424c0-1.28959517-.4599158-2.16910068-1.6092078-2.16910068-.87744213 0-1.40004662.59326174-1.62970603 1.16594902-.08398287.20494499-.10448108.4913885-.10448108.7780318v5.3565341h-3.17622514s.04159346-8.69198329 0-9.59186348h3.17622514v1.35810992c.42210364-.65358665 1.17735263-1.58322973 2.86258281-1.58322973 2.0898209 0 3.6568382 1.37089396 3.6568382 4.31702764z"></path></g></svg></a>
                                <a href="https://twitter.com/trello" title="Twitter" target="_blank" rel="noopener"><svg height="16" viewBox="0 0 20 16" width="20"><path d="m19.0426025 1.89416831c-.6070809.27573601-1.2752956.44311943-1.9307418.55341384.3110854-.05242868.7695883-.61749334.9529894-.84623773.2797448-.34874781.512285-.74604069.6430647-1.17517915.0166377-.03339901.0294061-.07573031-.0042561-.10097375-.0417876-.0166995-.0688722-.00815557-.1021475.00854393-.7316699.39340928-1.4881028.67885432-2.293288.88080182-.0669375.01669951-.1164636 0-.1582512-.04194294-.0669375-.07573032-.1296189-.1468003-.2004257-.20583111-.3385569-.28894028-.7018769-.51574287-1.1112406-.68312628-.5374349-.22020046-1.1247829-.313407-1.7040054-.27534766-.5633588.03650589-1.1166575.1961221-1.616561.4582655-.5010643.26253176-.9479595.62797907-1.3039279 1.0691567-.36834997.45593533-.63996937.99459147-.77887445 1.56548154-.13426201.55108368-.12342819 1.09634195-.04140068 1.65325103.01238152.09242982.00425615.10485736-.07893213.09242982-3.15032069-.47069303-5.76165874-1.60198743-7.88121865-4.0265226-.09208749-.10524572-.14200046-.10524572-.21745029.00815558-.92745255 1.3953796-.47746201 3.63777365.68137003 4.73955264.15438196.1468003.31302007.29360061.48442661.42758501-.0626814.0128159-.83381738-.07106999-1.52099123-.42758501-.09170057-.05864245-.13813124-.02485508-.1462566.07961392-.00851229.15107227.00425614.289717.02476302.45321681.17798422 1.41479763 1.15418898 2.72318446 2.49100524 3.23349028.15863811.06718638.33391387.12582883.50532041.15534423-.3048947.06679802-.6183017.11495474-1.49158515.04621491-.10872514-.02097147-.15051274.03339901-.10872514.13825637.65622008 1.79539099 2.07274232 2.32977519 3.13368304 2.63424989.14200046.0248551.28438783.0248551.42677521.0582541-.00851229.0128159-.01702458.0128159-.02514994.0252434-.35209922.5386562-1.57206498.9394443-2.14045371 1.1386733-1.03308233.3623404-2.15825213.5254519-3.25053355.4174876-.17450193-.0256318-.21125954-.02369-.25885097 0-.04759143.0295154-.00580383.0714584.05029989.1172849.22170643.1468003.44689516.2769011.67672696.4027299.69375153.3689426 1.41690916.6629316 2.17295517.8722579 3.90481903 1.082361 8.30335081.2869985 11.23506041-2.63658 2.3025741-2.2963762 3.109307-5.46268009 3.109307-8.63286759 0-.12427538.1462566-.19301521.2329271-.25825979.5989556-.45166336 1.0752569-.99226131 1.5221521-1.59616202.1002128-.13553785.0941388-.25631799.0941388-.30563979 0-.00854393 0-.0166995 0-.0166995 0-.05087524.006074-.03534082-.0716974 0"></path></svg></a>
                                <a href="https://www.youtube.com/channel/UCRcOkXoOrU6sN1yCz20VmQw" title="Youtube" target="_blank" rel="noopener"><svg height="14" viewBox="0 0 20 14" width="20"><path d="m12.6695433 7.17708642-4.43152592 2.43950617c-.19286329.10469136-.36604664-.03555555-.36604664-.25520987v-5.00740741c0-.22281482.17869373-.36266667.37155701-.25244445l4.46183305 2.56790124c.1971928.11259259.163737.39901234-.0358175.50765432zm7.0103835-2.87683951c0-2.37511111-1.9180056-4.30024691-4.2839264-4.30024691h-11.11168033c-2.3659208 0-4.28432007 1.9251358-4.28432007 4.30024691v5.22666667c0 2.37511112 1.91839927 4.30024692 4.28432007 4.30024692h11.11168033c2.3659208 0 4.2839264-1.9251358 4.2839264-4.30024692z"></path></svg></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
