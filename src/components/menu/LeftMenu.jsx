import React, { Component } from 'react';
import { Link } from 'react-router';
import './leftMenu.scss';

const imgUrl = 'data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAAK8AAAA7CAYAAAANZdogAAAAAXNSR0IArs4c6QAAFY1JREFUeAHtnQfYFcW5gEVEbNh7BStqVIwFjbFfL8ESrnrV3FiuvUQTu7EhGo2P3aixBiWIqNduLFGvGoSrCIIdQbCLUkSxI0og73vcPc7Zf3fP2fP//Pxezvc8LzPzzTffzM7Ozs7O7vmZZ546ZNasWcvDAPgQPoD+sFwdrhpFGj3Qej3AIF0CxkNS3kOxWOu1pFFTowcK9gAD9ILkqA3S5xV01zBv9EDdPTBvHSW755TJy8sp1shq9EDxHpiveJF5puSUycvLKdb2srib/IRWrQdvwah27dpNa4lW4nc1/DT3DnU37bmv1vZQ5wLYbgyTKOfxVBXKbIFRO3ieMtNJO9GdCv1Jf0DYKkK9a1NRL3iGep9uVqU4uxqyZPdmOW9DhTnAnaOD/CfhSi3VNHx1C/x+S7wI30VlexdpD2U6gGXH11oO27tAWdkyhGvBBPgUdq7VT612+JwXVoEd4fdwD7gZEMsUIqW2xD5rnnmjgn0p6K7CANgPvDKVWXAJV8a9pdT/j3/i2WXEbJppzsbvuUW6inPQFfvRRcpoSz0O3E+IflSgbHynsZw+xuGjG9G/QT/iXdB9bV5SyFsE3aLQAZz1F4ROsETEUoSOoxjvRqtDRwhF/8NgBAyCCikPXipch5zNwcY+TcM+jS3JO5T4BXA5XEjeDHRXEd8BHLhPoBtJ2KpCG9pT4ZbgrWUseGuZSdgS8kXk5P2WcNYGfHie/hm2g/7rQjprh2jJyHZD7L4Jyp1I3CXV2uhVj6HPw3x1LlEGG6lBdOIk+CS8A+PgtYi38s7nfDTAtcyV8BuIZ9KP0B8QObiR0CtmWxyNIiwJ8eeIyBwR2uct5E5wbRbLs+j3om013x7jginh/JFuUkpeWUV91n8KnEO9L5UzqkdWp6wXfxFZtYhxDbZORr2q2A2tku9ALo8LbemHIRzb+USdfZ3BnUENP4eJCe4l3QN6Ue5LwprFmfdYODpRYhnS94BX1EVwMY4rrlp0c1puoQHhwLU9pm+GmgYFHexg+JBjm0GYFG99yuTvg8x/jydnd3DGKDJ4D8ReZotExxb69i41f0J/A7rbQqMgfgzxn8Mh8FWgT0ZT70z06RlJw7Q07UlT16Rz8Nq4NHGdcgWNcLnQpoQDXoMGbZvRqO3JX512v5WRX1Jj05HIGJgA+ktKPHgzZ158eNvdE96FPkkHVdJ3k1/zjkHka0XCC6v4jbPfIOKaM5SlSdjWWE6hny6OE2HIse1K2sF7LzZTw7y2EnfwrpLTGBfbbVGq3T49ptzBS75rZS/QJyFNqg5eCp0N7eE0TrB3qSLyEmW8e9QsDKiuGNc6eE/H1vMbizPhZ/DnWEE4OIj/6KIe3IuwTUbLzWuL8jKNmgnzpjRO/Ssp+qRqt0hxfzIjSq8chakzLwOpG/n7w3C4PbItEiyOj1WLFMDWmbcm4cK4JDSkruNIT0RfcSdF77LxyNA2isd1+RxhnybFpeRNSWWcpswviPeM0znhulHexZT5NsfOrHOpc0ps4+DtDYMgflgjWhJnkt1x+AgFUk9gZNeqAe2xzUfAdFgwpfLLaK87JpmCD2+n+8Gn8HiG4XqRvsmxR21wBvOkHk199SzcTqCszGlZlgZ0hUHgzByLdx4fuN6EcFAtSXprWArypDuZv8szSOSlXUAJk9LGwg+Dl44fzMnoidWfwINwUDwAdqyD5FXyj8NuIPE5KrRjAxrwV/AA1gVnvuPBDv0YLocLoZrsjYEn7RqOK+t2Hw9e7TyBoVjHVnAp5UeEGTXEP8LGvm6ODGtO4Yyyx3MsL8Z59PUA4l7g+6Ivr3nRb4FuaGyXE95A3oM5+XHWVURcwm0DX8fKjHB8hr70FmUxGlexyCe9MbwCD8AK0A4OhUfhebgOVsp0WiADPz4NnwZPwTC4CBYFt/R6g1t4Byddoqs2C5SLYOubHC9IpVs5IxEhz7dJSv9Elm+bNoLLoKKvknZZacp5saUKeT5wvglnphrUqcTfRChfaMQX1BXhH0Gp6AvSfvKqLBFWSXqLknbWrJNDfb1xfD0S+VukXh+55XDu68WzwVd0ztRJmYpizVwnVTIp3x7SfL+P3ovnYWj2RYKPXcCXLE9kNYm87qBMi/BNUIsI/jqB30EPh8WSTtFtCop3lBYT/JUGL2FXuBJKsxhhPHjtly4B9xJXfJ0d6vcoaX8sgzfuQRp9YNTwtKCWW0TsqkmIw8PTnEa6h5sUaIYCnyvBOlkuyPPkKgeAA/3qLNuienzdCcpBaWXRe6dTjkvLr0eHL+9eH4PfUcRSmoVJxIM31tcazvGZ14efIrJqjvE2HDXLo7oeXnSbtW9rnuvOFhPa+EGWM47BPtkH3gbXfduDF9YNlHuJeN2CD5cC/wmTYF3SF6U4Wz7S/ZL8+Ik/xayk8tVs6hM/ZV3S9IR9wZ0Vlwnfwe1wLeWS22S2JewXnyc2hdMgXIt2Jp16V6BO98svhSKycWR8O+VnFCi4ZwHb0vroZCrIksmFnCWMcdo3yzH6IQnz2ZakLm+fyklWQrgyfAlvwOL1VkzZ46Gl5aFke6jAJd614Ewbyz+IfAXPp9jHM2+z17z43wRaSzqk7ZMmjy+ZztoWGpc0LJgek2Pf5CTl2NadRa8vTGF3LCbCNTpihnJt+AdwVrkFm+SWIup8oYwXwmUwGrpApxy2I085FfLszHMWrxDa6+zaGTy31tkVnXePLyIdwWwTLw6/CSnCY1FrfIituVx0nFFRAjo5dRmBfjlwAT8KrgC/cQ3Fz+VGwpPQ+QeP1WPYd4QLYTI8DklRV9dTffXaKy2o54ao8mPCHOuHF6K8s8K8vDj27mxcFZWz76o++GGzWWRf95qX8j5gVTwMkp4ELyfbiy6eeXsRXzvgfuKK7Qn1e5e0beCBrTRYaYz7bK5VnPa9Qu+FkxndfnjsmulPcD3sg85Fv+umPWAZeA76guuVE8BB3JvQdVVplibtVtYG8D668p4pevcM+4NryfXJ+wjdLsR/AQvAUzAw9kN8tgn17o3zw8AlynVhRdTv97B7oRsJ7rpMQPeX0CYtjs1MbJ1Z1oT/Ju0F6tJj+TT7SNclCp0wumbYfYOvdzLyvFu4Xk+K57pdUhmk7wviYXR4mGhTcTrIK8uTkxRnmgfBbap4UV217dh6lQ6Fp6L45YThTO12mDaXgNs3xRbeVVtQzID6nR0dkLbR9qyQ5YE8H6JmgIOyrpmRcodDc6XwgKLCLyBvzesMfGSA++zKiRDq3XtXTs7qpyJ6/NS9z+vVeAGUZuBEpd1IO0v+lCvZdVRNgu1YGrQVxsfCi1DaDA8Kb03cmfZ+cLb9OMhr1Sjt9M4xEHaCCbAL7TFMFfL+RplDyOwHXpQbEh6FfnpqgXTlC6jPT88qab14DoLHIWuQji9ZFvvH9WTeebyT4/B8lSQ6h5uTuAn91Ejt0tK7ZYsM3Nhn3SGNcWmQJS4l6hIcOqN5tWfJjnU5boFCNMi27Qzjo8Z5d8nbBqyoFdujwNlXcS3bvcKgGQl8NXvNm6wen+1A8YKoEHTxmtfJqizos96w/UxHSIsMYPzUPfP6RJo501TJKx9oRsR1Xd4rv7Uyys02NR21IVxMBe/BQ+BavA9syuyiribB9loM9wVnsvXAZdLNUPMFQJnWlE5RZeUZtBmVd2xG2bSii6KcCd+kZebpXC7cAuelGPmw5cNbveJF8RksluFgTIZ+dqpdzrht5cOly4U+DMTyAyTpmoVytzFY36GAfnzIcuAuDhUXATa/RefypFaJX0z0pKzbR7XKANo0LsN490g/NiO/iDreMfm2SKHYlmPyodFJzeWRy7VNwQdgz0kxwZkfvQyEUD4jcQa4Me9JcoYqLJQ7HdLkGZTO+q0u1Ls/rNZSFeNrAdgNUp/k0Y+G1pCdw2OiQh+KXRa9CS5xpMnyBl1NywbsdgS/L/kElB5hfbXGKbd7qfQP/9guL/DCUu5wHLg43wI+AX8NPAGd21XOyvvB0ejuJnTRvizBv4EzynD0QwmbCHbtUXpbPhU6RAYPEx6q/yhdEVDGWWx76AhDsHu1wuBHluB4nKniY5+drZ9CX30TVkDdo0ivAiPBu8zgMN84NgcQ7AO/Jf8tdQr6PxB4QeyA/nPSzpaeC5dKPtydTlhY8OODo9uRk+F16IuvMYSzR6jQz+BehztgP5gKofgHKmxUqpC3EGwCDvpMIf8Y+AZi8aq8JLNAI6PRA7X0AIOoI1wD4Z4tybL8sRY/WTZ42RKyfO+fVa6hn3t7oOZ1J1O7e5nehrLK7NvMbvyvHN8uWxrS6IGKHsgaiBVGQcInxCxZnpmzvIbOMsrRx0/ZaSZ59abZN3RzQQ8UHbyjc/rkFWZnt9fqlSavLgNHI4J4I9rogWI9wKzaC9yBiN9KES2LD1a+qfPJtbBQzpcHL8FXkBSfdDsXdtooMHf0AIOjAxwB/eBS8PuDkhBfCm4FP3vcCjqBD26TwS/MhsM2sBE4AB+CleLyeSF21tsH/JrsQFgR3NFwn/lr+F/wDVZDGj3QtAcYHIvCixCKM2lv2AP80soBnfzAxr3Aiv1L0r7wOAscjAdZG6E/KPSDlnfh/8APW9RvDC+DX65VrHdJ+y7ePeKGNHoguwcYJM6iaeIAdsD54qKQUGYDeB6eAz8hTMqzKBzgjV2EQj3bMK7oAQaQAzRLzqkwLpDAobOwAzRNvDC2KuCuYdrogSY94G5Dk+VAYJX51iywyYr6kcrSGZluqa2TkddQN3qgph5w8A7KsfQnPvXKVxT8Z05hvzhrSJUe4A61EnSFhauYzn3ZdMqqkHZ7H4f+Pfj3enuFsu48pIlfJmXNyvVWl1mOus6MGnF5aITutkh/WKif03Ha5AOrbXZHJxaXWvand7S6hfLrwUZ1O0gUxFdfGJxQt16Syn07djWMBLen/KWAHehncK6Jb4KK73JJu6bN7UjyV4ExEIp/A6FX3tGR72eGfsXUIoIvB4LfTbhPXdrFIFwE4l96tLXBex1tcxvyOFgD/LzxSPhzczsEH/3hgeb6icvja84O3rghaSGN8yQ7sD+AnWFpcN93GihjYbe0surIcyAeAlfCydA5x9YT9Rh8Bw42dyv8VLNZgg8H74fgt7U76YxwP/gHOKO1mcFLW7qAx/6bZh10RmH8zj2DN+4DDnpbeBumQJr0iG3rCXG4JDjAkuJF0qyHO8rHg/cs4n+1fYR/h8OhyeBFtx38D7wN3imehS3Tjgv9GXAZ+DLnJnAJ5n52z9CetL+b84Lx50Ie5/vwKKyRsPPjcF/Q+POYqoKd/XYKeKF/Dvp1X97voctCelcYApPg4yhuul/ZKBEh7zDwWHx76iext8K6oRnpvjAYbMeN4CTncrO0nx/aGke/JwwFX0QZbp+0iex8YWX7fgK/ghEwHrz4Sp81lP5JK5zU8d3CU+jOhKxfVaT9lCjpJi99NJlpH+D4Qbz1toTchpM9OHh/SbEt3JV0St5C6G6BSXAGXAGrwgPkpQ0oL6wNYABsAtbh0sTyoZxP4iZQfwzo26/0JkIoDg7/BtnnoTIn/jvydoVbQb+vgH8/4yQIZQIJz6H1fxLFTY+AJsKx3ozyWngBjoCrwQfwqZAUz9vTMAN6gx+au/Sxn8tC+mASd4IP8yfDLPBO67lIiuf957AzXAevwyCYSd/MJCwmVOKskCXTyWhXzOMP1pS9O8sxek9I3UL50syrA+JewYPgwSidNvM6+MqC7S9B+Y+yMoqgcyb9FgZCRbnQlrx34MpQlxbHZhg8mpaXpsO2SZ3ofEH0YoZ91WUDZXcBZc80H6EOG2de747l5xjifiqg/Dq2Jb4QTIR+sc6QtOfj2VAX6VdHr3gn657MN13zzBsVfi/NSaQb38yvyvJ85+XlNCk1yxnKK90ZMlU4juQW3xMYfgurpBbgLwGhPyilXGjubLQlJ2LtUJkS90eXNW8jZtT5d3xktTWlyiaqw9EMw3fpZ19NcpsqnsP2/kDtHWU6hL+csc+Xg79AKLeT6E6/LBIqg7j/Wc2wIF2OzleO1RaxgeeDHZyUr2jA0lQ0JZlRLU05LyJvBbMgbfb2dttScg2O7gMHXKbQprXItMPXA2+LtqsDpMmbHLeDO0+OJdP+G43vIYReRP7idxphKA7ypUJFtTj+bFcP2BBWh00hq61kVZWuWDxe1SrDgGOaQZu+JNvzGovtUrzrfR/7/t/YxvyXw4wo/lqKrqSKC2blV+hp1EQUe4Hrp1D6kfBWN4qGmV+zYG9HPQM/hRPBg46ltIai3lpngLhcZogv/86X/y3od2lGtKcdXE+ePwo8FOaH56Ha4MQkW6hvKLlrwuHgcbmOG0tdnQlD+YCEM1RNQvnNMHwLBoBrb8/ROGiOdKLwV81xkFJ2AXTe0XYAJ4WYrYn/DDyGQlJ05vWPuD1JhzngXEwvA/56eLS1oncx7prqV4T+GSQ32a3D9dBG8B48gN4n3vbEHaynQG+4Dj3qWQOJ67sj+H8Jv0vYmvJrKnOA+UcF74grpl2/j+P1hvj7nLI3Cv7WJ3wSzoX9IRb70ifyFbH/MFbmhLeSNx56RP49Dz64ORPXK2Mp6INjS8obOPOc+z+OFh6oaQ0pNPPGDuwkeBj6Q2ngmkd8OEE3eB1epROPIHwW7gIHqOud19AfTKjeDt6EcuW/KEl8MtwDt0FrD1yaU7rIphJ6IZaE9u5IZLEo2SIBxzYKR0NgtYTDvqRnwVEJfZMk7VoY5RpwO/68MBy48xPsajxDpqNfPiMvVj9BpCe+XDK1lLhunQbujrRt4cA3Affy0sRN+GNb6wioq7zbkKyTvIrdBtJbg3IC+Cr1WHDv0r3R81LKu9vwWFKfTGOzPfhgMj8sDnuDa8M+KbbXo1f6wNrgnueu8Cg4WMtC+gkYCZvDTvAIvAkelwO5QtC5Z2r/bwtLgTsL3knLQnpBeAfcr+0BvmhaLop7ty0LOncbBpcVUQTdFDgh1JM+G6z7LPBl18KwGXinrRB08W6DS4rWFSrvCG4hZUmTbafZ1UIaUPPgtQ3Y3wjfRA13XdoNXC71S7YRXa2D1+XU1zAdHLQvwDnQPsWn6ydP8FSIxZN+B3QO7UlvA2NAmQZXwHYmkOSs7rEtCh6L/uQV6BX6NI5uBXD70rZqp7wL24W2pIsMXo/rePBlijITjN8Y+jSObo4O3mVpQJ4cmmxwW0rTcGellVuyTfhrD10h3ELKrQJbT+L6sGCeIfn6bTLTZpXB1tl8iaz8WI+Ns+6GUHOb47JZIb7mhTVhLUjbXcoq2np6GvY2ZIlPxg1p9EDb7AFGrW+mvDUkJblR3TYPoNGqubsHGLU7gB9Y+PDmDsRJUNcux9zdk42jT/bAvwAhi5tjfvdREAAAAABJRU5ErkJggg==';

class LeftMenu extends Component {
    render() {
        return (
            <div id="left-menu">
                <div className="logo">
                    <img src={imgUrl} alt="" />
                </div>
                <div className="menu-wrap">
                    <ul>
                        <Link to="/cashier" activeClassName="active">
                            <li className="menu-item">
                                <i className="iconfont icon-shouyin"></i>
                                <div className="menu-name">
                                    收银
                            </div>
                            </li>
                        </Link>
                        <Link to="/cashier2" activeClassName="active">
                            <li className="menu-item">
                                <i className="iconfont icon-dingdan"></i>
                                <div className="menu-name">
                                    订单
                            </div>
                            </li>
                        </Link>
                        <li className="menu-item">
                            <i className="iconfont icon-vip"></i>
                            <div className="menu-name">
                                会员
                            </div>
                        </li>
                        <Link to="/cashier3" activeClassName="active">
                            <li className="menu-item">
                                <i className="iconfont icon-dingdan"></i>
                                <div className="menu-name">
                                    交班
                                </div>
                            </li>
                        </Link>
                        <li className="menu-item">
                            <i className="iconfont icon-set"></i>
                            <div className="menu-name">
                                设置
                            </div>
                        </li>
                        <li className="menu-item">
                            <i className="iconfont icon-chakankucun"></i>
                            <div className="menu-name">
                                库存
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default LeftMenu;