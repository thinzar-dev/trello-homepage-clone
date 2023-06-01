import React, { useState } from 'react';

const Trello_plans = () => {

    return (
        <div className='trello-plans' id='plans'>
            <div className='trello-plans-container'>
                <div className='trello-plans-wrapper'>
                    <div className='trello-plans-header'>
                        <div>
                            <h2>Trello priced your way</h2>
                            <p>Trusted by millions, Trello powers teams all around the world.</p>
                        </div>
                        <div>
                            <a className='btn-plans' href='https://trello.com/pricing'><span>Compare plans</span></a>
                        </div>
                    </div>
                    <div className='trello-plans-section'>
                        <div className='trello-plans-row'>
                            <div className='trello-plans-name'>
                                <h3 className='plan-name'>Free</h3>
                                <h3 className='plan-name'>Standard</h3>
                                <h3 className='plan-name plan-name-premium'>Premium</h3>
                                <h3 className='plan-name'>Enterprise</h3>
                            </div>
                            <div className='trello-plans-price'>
                                <div className='plans-price-col'>
                                    <div className='plan-price'>
                                        <span className='price-currency'>$</span>0
                                        <span className='price-currency'>USD</span>
                                    </div>
                                    <p className='price-detail'>Free for your whole team</p>
                                </div>
                                <div className='plans-price-col'>
                                    <div className='plan-price'>
                                        <span className='price-currency'>$</span>5
                                        <span className='price-currency'>USD</span>
                                    </div>
                                    <p className='price-detail'>Per user/month if billed annually ($6 billed monthly)</p>
                                </div>
                                <div className='plans-price-col plans-price-col-premium'>
                                    <div className='plan-price'>
                                        <span className='price-currency'>$</span>10
                                        <span className='price-currency'>USD</span>
                                    </div>
                                    <p className='price-detail'>Per user/month if billed annually ($12.50 billed monthly)</p>
                                </div>
                                <div className='plans-price-col'>
                                    <div className='plan-price'>
                                        <span className='price-currency'>$</span>17.50
                                        <span className='price-currency'>USD</span>
                                    </div>
                                    <p className='price-detail'>Per user/month - billed annually ($210.00 annual price per user)</p>
                                </div>
                            </div>
                            <div className='plans-description'>
                                <p className='description'>For individuals or teams looking to organize any project.</p>
                                <p className='description'>For small teams that need to manage work and scale collaboration. </p>
                                <p className='description description-premium'>For teams that need to track and visualize multiple projects in several ways, including boards, timelines, calendars, etc.</p>
                                <div className='description'>
                                    <p className='description-p'>For organizations that need to connect work across teams with more security and controls.</p>
                                    <div className='description-calculation'>
                                        <div>Est. cost for <input type="number" value='50' min="50" max="5000" />users</div>
                                        <input
                                            type='range'
                                            min={50}
                                            max={5000}
                                            value={50}
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <div className='plans-btn'>
                                <div className='free-link'>
                                    <div className='free-plan-link'>
                                        <a aria-label="Get started with a Free plan" data-uuid="411SemhnWRkX2rXfhZ9ZDP" href="https://trello.com/signup"><span>Get started</span></a>
                                    </div>
                                </div>
                                <div className='free-link'>
                                    <div className='free-plan-link'>
                                        <a aria-label="Sign up for a Standard plan now" data-uuid="411SemhnWRkX2rXfhZ9ZDP" href="https://trello.com/signup"><span>Sign up now</span></a>
                                    </div>
                                </div>
                                <div className='free-link free-link-premium'>
                                    <div className='free-plan-link free-plan-link-premium'>
                                        <a aria-label="Try Premium for free" data-uuid="4m7gBjjf03EDXHjDZUcMeC" href='https://trello.com/signup'><span>Try for free</span></a>
                                    </div>
                                </div>
                                <div className='free-link'>
                                    <div className='free-plan-link'>
                                        <a aria-label="Contact sales about Trello Enterprise" data-uuid="2NmD7Mbg6mazGG7ONx1gbZ" href="https://trello.com/enterprise#contact"><span>Contact sales</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className='plans-info'>
                                <div className='plan-info-link'></div>
                                <div className='plan-info-link'>
                                    <div className='link-buttonstyle'>
                                        <a href="https://trello.com/standard"><span>Learn more about Standard</span></a>
                                    </div>
                                </div>
                                <div className='plan-info-link plan-info-link-premium'>
                                    <div className='link-buttonstyle'>
                                        <a href="https://trello.com/premium"><span>Learn more about Premium</span></a>
                                    </div>
                                </div>
                                <div className='plan-info-link'>
                                    <div className='link-buttonstyle'>
                                        <a href="https://trello.com/enterprise"><span>Learn more about Enterprise</span></a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='trello-plans-ipad-row'>
                            <h3 className='plan-name'>Free</h3>
                            <div className='plans-price-col'>
                                <div className='plan-price'>
                                    <span className='price-currency'>$</span>0
                                    <span className='price-currency'>USD</span>
                                </div>
                                <p className='price-detail'>Free for your whole team</p>
                            </div>
                            <p className='description'>For individuals or teams looking to organize any project.</p>
                            <div className='free-link'>
                                <div className='free-plan-link'>
                                    <a aria-label="Get started with a Free plan" data-uuid="411SemhnWRkX2rXfhZ9ZDP" href="https://trello.com/signup"><span>Get started</span></a>
                                </div>
                            </div>
                            <div className='plan-info-link'></div>
                        </div>

                        <div className='trello-plans-ipad-row'>
                            <h3 className='plan-name'>Standard</h3>
                            <div className='plans-price-col'>
                                <div className='plan-price'>
                                    <span className='price-currency'>$</span>5
                                    <span className='price-currency'>USD</span>
                                </div>
                                <p className='price-detail'>Per user/month if billed annually ($6 billed monthly)</p>
                            </div>
                            <p className='description'>For individuals or teams looking to organize any project.</p>
                            <div className='free-link'>
                                <div className='free-plan-link'>
                                    <a aria-label="Sign up for a Standard plan now" data-uuid="411SemhnWRkX2rXfhZ9ZDP" href="https://trello.com/signup"><span>Sign up now</span></a>
                                </div>
                            </div>
                            <div className='plan-info-link'>
                                <div className='link-buttonstyle'>
                                    <a href="https://trello.com/standard"><span>Learn more about Standard</span></a>
                                </div>
                            </div>
                        </div>

                        <div className='trello-plans-ipad-row'>
                            <h3 className='plan-name plan-name-premium'>Premium</h3>
                            <div className='plans-price-col plans-price-col-premium'>
                                <div className='plan-price'>
                                    <span className='price-currency'>$</span>10
                                    <span className='price-currency'>USD</span>
                                </div>
                                <p className='price-detail'>Per user/month if billed annually ($12.50 billed monthly)</p>
                            </div>
                            <p className='description description-premium'>For teams that need to track and visualize multiple projects in several ways, including boards, timelines, calendars, etc.</p>
                            <div className='free-link free-link-premium'>
                                <div className='free-plan-link free-plan-link-premium'>
                                    <a aria-label="Try Premium for free" data-uuid="4m7gBjjf03EDXHjDZUcMeC" href='https://trello.com/signup'><span>Try for free</span></a>
                                </div>
                            </div>
                            <div className='plan-info-link plan-info-link-premium'>
                                <div className='link-buttonstyle'>
                                    <a href="https://trello.com/premium"><span>Learn more about Premium</span></a>
                                </div>
                            </div>
                        </div>

                        <div className='trello-plans-ipad-row'>
                            <h3 className='plan-name'>Enterprise</h3>
                            <div className='plans-price-col'>
                                <div className='plan-price'>
                                    <span className='price-currency'>$</span>17.50
                                    <span className='price-currency'>USD</span>
                                </div>
                                <p className='price-detail'>Per user/month - billed annually ($210.00 annual price per user)</p>
                            </div>
                            <div className='description'>
                                <p className='description-p'>For organizations that need to connect work across teams with more security and controls.</p>
                                <div className='description-calculation'>
                                    <div>Est. cost for <input type="number" value="50" min="50" max="5000" aria-label="Users" />users</div>
                                    <input type="range" value="50" min="50" max="5000" aria-label="Users" />
                                    {/* <input type="range" name="rangeInput" min="50" max="5000" onchange={{updatePrice}}></input> */}
                                </div>
                            </div>
                            <div className='free-link'>
                                <div className='free-plan-link'>
                                    <a aria-label="Contact sales about Trello Enterprise" data-uuid="2NmD7Mbg6mazGG7ONx1gbZ" href="https://trello.com/enterprise#contact"><span>Contact sales</span></a>
                                </div>
                            </div>
                            <div className='plan-info-link'>
                                <div className='link-buttonstyle'>
                                    <a href="https://trello.com/enterprise"><span>Learn more about Enterprise</span></a>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Trello_plans
