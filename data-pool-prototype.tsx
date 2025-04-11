const ReportsTab = () => {
  const [selectedReport, setSelectedReport] = useState(null);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [sharedLink, setSharedLink] = useState('');
  const [copySuccess, setCopySuccess] = useState(false);
  
  const reports = [
    {
      id: 1,
      category: "Product",
      title: "Feature Priority Matrix",
      description: "Top requested features ranked by customer demand and revenue impact",
      lastRun: "2 hours ago",
      content: {
        type: "feature-matrix",
        data: [
          { feature: "Data Integration API", requests: 42, combinedRevenue: "$1.2M", customers: ["Acme Corp", "TechGiant", "Innovate Inc"] },
          { feature: "Custom Dashboard Builder", requests: 38, combinedRevenue: "$980K", customers: ["Global Solutions", "Acme Corp", "StartupXYZ"] },
          { feature: "Advanced Analytics", requests: 35, combinedRevenue: "$850K", customers: ["TechGiant", "Data Wizards", "FinTech Solutions"] },
          { feature: "Workflow Automation", requests: 29, combinedRevenue: "$720K", customers: ["Innovate Inc", "SmartCorp", "TechGiant"] },
          { feature: "Mobile Application", requests: 24, combinedRevenue: "$610K", customers: ["Retail Chain", "Field Services Co", "Healthcare Inc"] }
        ]
      }
    },
    {
      id: 2,
      category: "Product",
      title: "Product Documentation",
      description: "Generated PRDs and Technical Documents for upcoming features",
      lastRun: "1 day ago",
      content: {
        type: "documentation",
        docs: [
          {
            title: "Data Integration API - PRD",
            summary: "Comprehensive API for seamless integration with third-party data sources",
            sections: [
              "Problem Statement: Customers are spending too much time manually moving data between systems",
              "Proposed Solution: RESTful API with OAuth authentication and webhook support",
              "User Stories: As a data analyst, I want to automatically sync my Salesforce data...",
              "Success Metrics: Reduce integration time by 60%, increase data freshness by 40%"
            ]
          },
          {
            title: "Data Integration API - TDD",
            summary: "Technical design for the integration API implementation",
            sections: [
              "Architecture Overview: Microservice design with event-driven processing",
              "Authentication Flow: OAuth2 with refresh tokens and scoped access",
              "Rate Limiting Strategy: Token bucket algorithm with 1000 requests per minute",
              "Data Transformation: Pipeline design with pluggable transformers"
            ]
          }
        ]
      }
    },
    {
      id: 3,
      category: "Sales",
      title: "Objection Analysis",
      description: "Top objections by deal size and effective counters",
      lastRun: "6 hours ago",
      content: {
        type: "objections",
        objections: [
          {
            objection: "Your solution is too expensive",
            frequency: "68% of deals > $100K",
            bestResponses: [
              "Focus on ROI - average customer sees 3.2x return in first year",
              "Compare TCO including reduced integration costs",
              "Mention Enterprise plan case study with 187% ROI"
            ],
            topSalespeople: ["Sarah Johnson", "Michael Chenimport React, { useState } from 'react';
import { LayoutDashboard, LineChart, Link } from 'lucide-react';

const DataPoolPrototype = () => {
  const [activeTab, setActiveTab] = useState('workflows');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-blue-700 text-white p-4">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Data Pool</h1>
            <p className="text-sm opacity-80">Easily unite all your third party data and build agents</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="bg-white text-blue-700 px-4 py-2 rounded-md font-medium">Upgrade</button>
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-blue-700 font-bold">JP</span>
            </div>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex mx-4">
          <button
            className={`flex items-center py-4 px-6 border-b-2 font-medium text-sm ${
              activeTab === 'workflows' 
                ? 'border-blue-500 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => handleTabClick('workflows')}
          >
            <LayoutDashboard className="mr-2 h-5 w-5" />
            Workflows
          </button>
          <button
            className={`flex items-center py-4 px-6 border-b-2 font-medium text-sm ${
              activeTab === 'reports' 
                ? 'border-blue-500 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => handleTabClick('reports')}
          >
            <LineChart className="mr-2 h-5 w-5" />
            Reports
          </button>
          <button
            className={`flex items-center py-4 px-6 border-b-2 font-medium text-sm ${
              activeTab === 'connections' 
                ? 'border-blue-500 text-blue-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => handleTabClick('connections')}
          >
            <Link className="mr-2 h-5 w-5" />
            Connections
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6">
        {activeTab === 'workflows' && <WorkflowsTab />}
        {activeTab === 'reports' && <ReportsTab />}
        {activeTab === 'connections' && <ConnectionsTab />}
      </div>
    </div>
  );
};

const WorkflowCategory = ({ title, workflows }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {workflows.map((workflow, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-4 border border-gray-200 hover:shadow-lg transition-shadow">
            <h3 className="font-medium text-lg mb-2 text-blue-700">{workflow.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{workflow.description}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors">
              Start Workflow
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const WorkflowsTab = () => {
  const productWorkflows = [
    {
      title: "Feature Prioritization",
      description: "What features do customers want? How many want what feature and what is their combined revenue for each feature?"
    },
    {
      title: "Documentation",
      description: "Write me a 1 pager, PRD, and TDD (utilizing our code base in GitHub) for each of these features."
    },
    {
      title: "Communication",
      description: "When features are built and complete in GitHub, communicate with customers and sales/CS people who wanted them."
    }
  ];

  const salesWorkflows = [
    {
      title: "Objections",
      description: "What are the top objections filtered by deal size and what's the best way a sales person has overcome them."
    },
    {
      title: "Sales Process",
      description: "What's the best way to run a sales process to ensure a second meeting?"
    },
    {
      title: "Coaching",
      description: "What's the difference between the meeting organization of a sales person who succeeds and one who doesn't."
    },
    {
      title: "Feature Analysis",
      description: "What are the features that resonate with our existing customers more than we mention them."
    }
  ];

  const csWorkflows = [
    {
      title: "Implementation Plan",
      description: "Write implementation plan for a new customer based on what they said they value and the people involved."
    },
    {
      title: "Account Management",
      description: "Create an account management process optimized for customer success."
    }
  ];

  const engWorkflows = [
    {
      title: "Recognition",
      description: "Tell me when good features are mentioned and assign props to the people who worked on them."
    }
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Workflows</h1>
        <p className="text-gray-600">Launch AI-powered workflows to automate key business processes</p>
      </div>
      <WorkflowCategory title="Product" workflows={productWorkflows} />
      <WorkflowCategory title="Sales" workflows={salesWorkflows} />
      <WorkflowCategory title="Customer Success" workflows={csWorkflows} />
      <WorkflowCategory title="Engineering" workflows={engWorkflows} />
    </div>
  );
};

const ReportsTab = () => {
  const [selectedReport, setSelectedReport] = useState(null);
  
  const reports = [
    {
      id: 1,
      category: "Product",
      title: "Feature Priority Matrix",
      description: "Top requested features ranked by customer demand and revenue impact",
      lastRun: "2 hours ago",
      content: {
        type: "feature-matrix",
        data: [
          { feature: "Data Integration API", requests: 42, combinedRevenue: "$1.2M", customers: ["Acme Corp", "TechGiant", "Innovate Inc"] },
          { feature: "Custom Dashboard Builder", requests: 38, combinedRevenue: "$980K", customers: ["Global Solutions", "Acme Corp", "StartupXYZ"] },
          { feature: "Advanced Analytics", requests: 35, combinedRevenue: "$850K", customers: ["TechGiant", "Data Wizards", "FinTech Solutions"] },
          { feature: "Workflow Automation", requests: 29, combinedRevenue: "$720K", customers: ["Innovate Inc", "SmartCorp", "TechGiant"] },
          { feature: "Mobile Application", requests: 24, combinedRevenue: "$610K", customers: ["Retail Chain", "Field Services Co", "Healthcare Inc"] }
        ]
      }
    },
    {
      id: 2,
      category: "Product",
      title: "Product Documentation",
      description: "Generated PRDs and Technical Documents for upcoming features",
      lastRun: "1 day ago",
      content: {
        type: "documentation",
        docs: [
          {
            title: "Data Integration API - PRD",
            summary: "Comprehensive API for seamless integration with third-party data sources",
            sections: [
              "Problem Statement: Customers are spending too much time manually moving data between systems",
              "Proposed Solution: RESTful API with OAuth authentication and webhook support",
              "User Stories: As a data analyst, I want to automatically sync my Salesforce data...",
              "Success Metrics: Reduce integration time by 60%, increase data freshness by 40%"
            ]
          },
          {
            title: "Data Integration API - TDD",
            summary: "Technical design for the integration API implementation",
            sections: [
              "Architecture Overview: Microservice design with event-driven processing",
              "Authentication Flow: OAuth2 with refresh tokens and scoped access",
              "Rate Limiting Strategy: Token bucket algorithm with 1000 requests per minute",
              "Data Transformation: Pipeline design with pluggable transformers"
            ]
          }
        ]
      }
    },
    {
      id: 3,
      category: "Sales",
      title: "Objection Analysis",
      description: "Top objections by deal size and effective counters",
      lastRun: "6 hours ago",
      content: {
        type: "objections",
        objections: [
          {
            objection: "Your solution is too expensive",
            frequency: "68% of deals > $100K",
            bestResponses: [
              "Focus on ROI - average customer sees 3.2x return in first year",
              "Compare TCO including reduced integration costs",
              "Mention Enterprise plan case study with 187% ROI"
            ],
            topSalespeople: ["Sarah Johnson", "Michael Chen"]
          },
          {
            objection: "We already use [Competitor X]",
            frequency: "42% of all deals",
            bestResponses: [
              "Highlight our unique data unification capabilities",
              "Show integration benchmark comparison",
              "Offer migration services with 30-day parallel run"
            ],
            topSalespeople: ["David Rodriguez", "Emma Wilson"]
          },
          {
            objection: "We need to build this in-house",
            frequency: "35% of deals > $250K",
            bestResponses: [
              "Calculate build vs buy cost analysis",
              "Emphasize ongoing maintenance and updates",
              "Reference customers who switched from in-house solutions"
            ],
            topSalespeople: ["Michael Chen", "Priya Patel"]
          }
        ]
      }
    },
    {
      id: 4,
      category: "Sales",
      title: "Process Optimization",
      description: "Suggested meeting flows for improved close rates",
      lastRun: "3 days ago",
      content: {
        type: "process",
        recommendation: "Based on analysis of 250 sales calls, the following meeting structure yields 42% higher close rates:",
        steps: [
          {
            step: "1. Discovery (15 min)",
            description: "Focus on data challenges, current tools, and integration pain points",
            successFactors: ["Ask about data silos", "Quantify time spent on manual processes"]
          },
          {
            step: "2. Value Proposition (10 min)",
            description: "Tailor presentation to the customer's specific industry and data needs",
            successFactors: ["Show relevant use case", "Include industry-specific ROI"]
          },
          {
            step: "3. Interactive Demo (20 min)",
            description: "Walk through the specific workflows that address the customer's needs",
            successFactors: ["Use their data types in examples", "Focus on AI-powered insights"]
          },
          {
            step: "4. Objection Handling (10 min)",
            description: "Address concerns proactively based on customer profile",
            successFactors: ["Use social proof from similar customers", "Quantify implementation effort"]
          },
          {
            step: "5. Next Steps (5 min)",
            description: "Propose clear timeline and action items",
            successFactors: ["Schedule technical deep dive", "Define decision criteria"]
          }
        ]
      }
    },
    {
      id: 5,
      category: "Customer Success",
      title: "Implementation Playbook",
      description: "Custom implementation plans for new customers",
      lastRun: "12 hours ago",
      content: {
        type: "implementation",
        customer: "TechGiant Inc.",
        stakeholders: [
          { name: "Sarah Johnson", role: "Data Integration Lead", priorities: "Seamless data flow" },
          { name: "Michael Chen", role: "CTO", priorities: "Security compliance" },
          { name: "Emma Wilson", role: "Business Analyst", priorities: "Custom dashboards" }
        ],
        timeline: [
          { phase: "Week 1-2", activities: ["Account setup", "Initial data source connections", "Security review"] },
          { phase: "Week 3-4", activities: ["Data mapping workshop", "First integration testing", "Administrator training"] },
          { phase: "Week 5-6", activities: ["Dashboard customization", "Workflow configuration", "User acceptance testing"] },
          { phase: "Week 7-8", activities: ["Production deployment", "Monitoring setup", "Knowledge transfer"] }
        ],
        successCriteria: [
          "All 7 data sources successfully connected",
          "Dashboard load time under 2 seconds",
          "100% data accuracy in sample validation",
          "All users trained and onboarded"
        ]
      }
    },
    {
      id: 6,
      category: "Engineering",
      title: "Feature Recognition",
      description: "Most praised features and contributing engineers",
      lastRun: "2 days ago",
      content: {
        type: "recognition",
        topFeatures: [
          {
            feature: "Real-time Data Integration",
            mentionCount: 47,
            customerQuotes: [
              "The real-time sync has cut our reporting lag from hours to seconds",
              "Game-changing for our operational decisions"
            ],
            engineers: ["Alex Zhang", "Priya Patel", "Marcus Johnson"],
            contributionDetails: "Alex led the architecture design, Priya built the core sync engine, Marcus handled error handling and recovery"
          },
          {
            feature: "Custom Dashboard Builder",
            mentionCount: 38,
            customerQuotes: [
              "The drag-and-drop interface is so intuitive my whole team uses it",
              "We've replaced three separate tools with just your dashboards"
            ],
            engineers: ["Sophia Rodriguez", "Wei Chen", "Jordan Taylor"],
            contributionDetails: "Sophia designed the UI components, Wei built the data binding system, Jordan implemented the export functionality"
          },
          {
            feature: "Natural Language Query",
            mentionCount: 29,
            customerQuotes: [
              "Being able to just ask questions in plain English has transformed how our business users interact with data",
              "The accuracy of the results is impressive"
            ],
            engineers: ["Rahul Mehta", "Emma Wilson", "David Kim"],
            contributionDetails: "Rahul built the NLP model, Emma created the query translation engine, David optimized the performance"
          }
        ]
      }
    }
  ];

  const handleViewReport = (report) => {
    setSelectedReport(report);
  };

  const closeReportView = () => {
    setSelectedReport(null);
  };

  const renderReportContent = (report) => {
    switch (report.content.type) {
      case 'feature-matrix':
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Feature Priority Ranking</h3>
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Feature</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Requests</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Revenue Impact</th>
                  <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Key Customers</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {report.content.data.map((item, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{item.feature}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{item.requests}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{item.combinedRevenue}</td>
                    <td className="px-4 py-3 text-sm text-gray-500">{item.customers.join(', ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      
      case 'documentation':
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Product Documentation</h3>
            {report.content.docs.map((doc, idx) => (
              <div key={idx} className="mb-6 border-b pb-6">
                <h4 className="text-md font-medium mb-2">{doc.title}</h4>
                <p className="text-sm text-gray-600 mb-3">{doc.summary}</p>
                <div className="bg-gray-50 p-3 rounded">
                  {doc.sections.map((section, i) => (
                    <p key={i} className="text-sm mb-2">• {section}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'objections':
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Sales Objection Analysis</h3>
            {report.content.objections.map((obj, idx) => (
              <div key={idx} className="mb-6 border-b pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-md font-medium">"{obj.objection}"</h4>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{obj.frequency}</span>
                </div>
                <div className="mb-3">
                  <h5 className="text-sm font-medium mb-2">Best Responses:</h5>
                  <ul className="list-disc pl-5">
                    {obj.bestResponses.map((response, i) => (
                      <li key={i} className="text-sm mb-1">{response}</li>
                    ))}
                  </ul>
                </div>
                <div className="text-sm text-gray-600">
                  <span className="font-medium">Top performers:</span> {obj.topSalespeople.join(', ')}
                </div>
              </div>
            ))}
          </div>
        );
      
      case 'process':
        return (
          <div>
            <h3 className="text-lg font-semibold mb-2">Sales Process Optimization</h3>
            <p className="text-sm text-gray-600 mb-4">{report.content.recommendation}</p>
            <div className="space-y-4">
              {report.content.steps.map((step, idx) => (
                <div key={idx} className="bg-white p-3 border rounded shadow-sm">
                  <div className="font-medium text-blue-700 mb-1">{step.step}</div>
                  <p className="text-sm mb-2">{step.description}</p>
                  <div className="bg-gray-50 p-2 rounded">
                    <div className="text-xs font-medium mb-1">Success Factors:</div>
                    {step.successFactors.map((factor, i) => (
                      <div key={i} className="flex items-center text-sm mb-1">
                        <div className="w-1 h-1 bg-blue-500 rounded-full mr-2"></div>
                        {factor}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      
      case 'implementation':
        return (
          <div>
            <h3 className="text-lg font-semibold mb-2">Implementation Plan</h3>
            <div className="mb-4">
              <div className="text-md font-medium mb-2">Customer: {report.content.customer}</div>
              <div className="mb-3">
                <div className="text-sm font-medium mb-2">Key Stakeholders:</div>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {report.content.stakeholders.map((person, idx) => (
                    <div key={idx} className="bg-white p-2 border rounded text-sm">
                      <div className="font-medium">{person.name}</div>
                      <div className="text-gray-600 text-xs mb-1">{person.role}</div>
                      <div className="text-xs bg-blue-50 p-1 rounded">{person.priorities}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mb-4">
                <div className="text-sm font-medium mb-2">Implementation Timeline:</div>
                <div className="space-y-2">
                  {report.content.timeline.map((phase, idx) => (
                    <div key={idx} className="flex">
                      <div className="w-24 flex-shrink-0 font-medium text-sm">{phase.phase}</div>
                      <div className="flex-1">
                        {phase.activities.map((activity, i) => (
                          <div key={i} className="text-sm mb-1">• {activity}</div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-sm font-medium mb-2">Success Criteria:</div>
                <div className="bg-green-50 p-2 rounded border border-green-100">
                  {report.content.successCriteria.map((criteria, idx) => (
                    <div key={idx} className="flex items-center text-sm mb-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                      {criteria}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'recognition':
        return (
          <div>
            <h3 className="text-lg font-semibold mb-4">Feature Recognition Report</h3>
            {report.content.topFeatures.map((feature, idx) => (
              <div key={idx} className="mb-6 border-b pb-6">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-md font-medium">{feature.feature}</h4>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">{feature.mentionCount} mentions</span>
                </div>
                <div className="mb-3">
                  <h5 className="text-sm font-medium mb-2">Customer Quotes:</h5>
                  {feature.customerQuotes.map((quote, i) => (
                    <div key={i} className="italic text-sm mb-2 pl-3 border-l-2 border-gray-300">"{quote}"</div>
                  ))}
                </div>
                <div className="bg-blue-50 p-3 rounded mb-2">
                  <h5 className="text-sm font-medium mb-1">Contributing Engineers:</h5>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {feature.engineers.map((engineer, i) => (
                      <span key={i} className="bg-blue-100 text-blue-800 rounded-full px-2 py-1 text-xs">{engineer}</span>
                    ))}
                  </div>
                  <div className="text-xs text-gray-600">{feature.contributionDetails}</div>
                </div>
              </div>
            ))}
          </div>
        );
      
      default:
        return <div>Report content not available</div>;
    }
  };

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Reports</h1>
        <p className="text-gray-600">Review insights generated from your workflow runs</p>
      </div>
      
      <div className="mb-4 flex">
        <input
          type="text"
          placeholder="Search reports..."
          className="border border-gray-300 rounded-md px-4 py-2 w-64"
        />
        <select className="ml-2 border border-gray-300 rounded-md px-4 py-2">
          <option>All Categories</option>
          <option>Product</option>
          <option>Sales</option>
          <option>Customer Success</option>
          <option>Engineering</option>
        </select>
      </div>
      
      <div className="bg-white rounded-lg shadow border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Report</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Run</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {reports.map((report, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800">{report.category}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm font-medium text-gray-900">{report.title}</div>
                  <div className="text-sm text-gray-500">{report.description}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {report.lastRun}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button 
                    className="text-blue-600 hover:text-blue-900 mr-3"
                    onClick={() => handleViewReport(report)}
                  >
                    View
                  </button>
                  <button className="text-gray-600 hover:text-gray-900">Download</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Report Modal */}
      {selectedReport && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-screen overflow-auto">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <span className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 mb-2 inline-block">
                    {selectedReport.category}
                  </span>
                  <h2 className="text-xl font-bold">{selectedReport.title}</h2>
                </div>
                <button 
                  onClick={closeReportView}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="border-t pt-4">
                {renderReportContent(selectedReport)}
              </div>
            </div>
            <div className="bg-gray-50 px-6 py-3 flex justify-end rounded-b-lg">
              <button 
                onClick={closeReportView}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md text-sm hover:bg-gray-300 transition-colors mr-2"
              >
                Close
              </button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors">
                Download
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ConnectionsTab = () => {
  const connectedApps = [
    { name: "Intercom", status: "Connected", icon: "💬" },
    { name: "GitHub", status: "Connected", icon: "💻" },
    { name: "Gong", status: "Connected", icon: "🔊" },
    { name: "Gmail", status: "Connected", icon: "✉️" },
    { name: "Anthropic", status: "Connected", icon: "🤖" },
    { name: "ChatGPT", status: "Connected", icon: "💬" },
    { name: "Gemini", status: "Connected", icon: "👾" }
  ];

  const availableApps = [
    { name: "Salesforce", competitor: "CRM", icon: "☁️" },
    { name: "Zendesk", competitor: "Customer Support", icon: "🎧" },
    { name: "Slack", competitor: "Communication", icon: "💬" },
    { name: "HubSpot", competitor: "Marketing", icon: "📊" },
    { name: "Microsoft Teams", competitor: "Communication", icon: "👥" }
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Connections</h1>
        <p className="text-gray-600">Manage your data sources and AI service connections</p>
      </div>
      
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Connected Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {connectedApps.map((app, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">{app.icon}</div>
                <div>
                  <h3 className="font-medium">{app.name}</h3>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                    <span className="text-sm text-gray-600">{app.status}</span>
                  </div>
                </div>
              </div>
              <div className="border border-gray-200 rounded p-2 bg-gray-50">
                <div className="mb-1">
                  <span className="text-xs text-gray-500">API Key:</span>
                  <span className="text-sm ml-1">•••••••••••••••••</span>
                </div>
                <div>
                  <span className="text-xs text-gray-500">App Secret:</span>
                  <span className="text-sm ml-1">•••••••••••••••••</span>
                </div>
              </div>
              <div className="mt-3 flex justify-end">
                <button className="text-sm text-red-600 hover:text-red-800">Disconnect</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div>
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Available Connections</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {availableApps.map((app, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-4 border border-gray-200 opacity-80 hover:opacity-100">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">{app.icon}</div>
                <div>
                  <h3 className="font-medium">{app.name}</h3>
                  <span className="text-sm text-gray-600">{app.competitor}</span>
                </div>
              </div>
              <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-700 transition-colors">
                Connect
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DataPoolPrototype;