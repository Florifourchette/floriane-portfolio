import React from "react";
import Table from "react-bootstrap/Table";

const Experiences = () => {
  return (
    <Table striped bordered hover size="sm">
      <tbody>
        <tr>
          <td>Nov 2021 – Oct 2022</td>
          <td>Marketing Performance Analyst</td>
          <td>Inyova GmbH, Frankfurt am Main, Germany</td>
          <td>
            <ul>
              <li>
                <strong>Product owner of the company website:</strong> Updated
                company websites according to stakeholders’ requirements
                (created landing pages, implemented SEO best practices)
              </li>
              <li>
                <strong>Project management: </strong>
                <ul>
                  <li>
                    Launched of a new company website (implemented effective
                    communication between the teams
                  </li>
                  <li>Kept an overview of the project</li>
                  <li>
                    Prioritized the different activities to meet to project
                    goals
                  </li>
                </ul>
              </li>
              <li>
                <strong>Google Ads: </strong>
                <ul>
                  <li>Improved the quality score (from 3 to 4)</li>
                  <li>Decreased the cost per conversion (by 33%)</li>
                  <li>
                    Managed keywords and created new ads for Germany and
                    Switzerland (FR, EN, DE)
                  </li>
                </ul>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Sept 2018 – Jul 2021</td>
          <td>Marketing Manager</td>
          <td>iSi GmbH, Darmstadt, Germany</td>
          <td>
            {" "}
            <ul>
              <li>
                <strong>Wordpress and Shopware 5 and 6:</strong>{" "}
                <ul>
                  <li>Created and posted webpages in 4 different languages</li>
                  <li>
                    Improved the user experiences thanks to the installations of
                    new plugins
                  </li>
                </ul>
              </li>
              <li>
                <strong>SEO-optimization: </strong>
                <ul>
                  <li>
                    Optimized blogs and website: researched new keyword
                    opportunities
                  </li>
                  <li>Reached 5.5K of visits per month on the blog </li>
                  <li>Recreated the whole category tree of the websites</li>
                  <li>
                    Updated the product portfolio to implement SEO best
                    practices (portfolio of 30+ brands).
                  </li>
                </ul>
              </li>
              <li>
                <strong>Team-management: </strong>
                <ul>
                  <li>
                    Managed an international team implementing inter-cultural
                    communication
                  </li>
                </ul>
              </li>
              <li>
                <strong>Google Ads: </strong>
                <ul>
                  <li>
                    Managed and improved cost per conversion (budget EUR20K+)
                  </li>
                  <li>Created and expanded the affiliate network</li>
                </ul>
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Feb 2018 – Aug 2018</td>
          <td>SEO Analyst</td>
          <td>iSi GmbH, Darmstadt, Germany</td>
          <td>
            <ul>
              <li>Managed online campaigns </li>
              <li>SEO-improved the company websites for a better ranking</li>
              <li>Contacted bloggers for backlinking campaigns</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Jan 2017 – Jul 2017</td>
          <td>Internship in Marketing </td>
          <td>Metarom Iberica, Barcelona, Spain</td>
          <td>
            <ul>
              <li>
                Conducted a market analysis in Europe to identify the most
                popular drinks per country
              </li>
              <li>
                - Helped in designing and implementing a group strategy
                including different subsidiaries and departments (laboratory,
                marketing, and sales)
              </li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>Aug 2016 – Dec 2016</td>
          <td>Customer Agent Support for Microsoft Bing Ads</td>
          <td>Bertelsmann SE & Co. KGaA</td>
          <td>
            <ul>
              <li>
                Assisted firms in creating and managing their Bing Ads accounts
              </li>
            </ul>
          </td>
        </tr>
      </tbody>
    </Table>
  );
};

export default Experiences;
