import React, { useState } from 'react';
import Header from './components/Header';
import { Footer } from './components/Footer';
import { Card } from './components/Card';
import { Accordion } from './components/Accordion';
import { StoriesPage } from './components/StoriesPage';
import { KnowYourRightsPage } from './components/KnowYourRightsPage';
import { ResourceDirectoryPage } from './components/ResourceDirectoryPage';
import { ToolkitPage } from './components/ToolkitPage';
import { HandbooksPage } from './components/HandbooksPage';
import { AssistantPage } from './components/AssistantPage';
import { Chatbot } from './components/Chatbot';
import { StateProvider, useStateContext } from './components/StateContext';
import { POLICIES_DATA, TIPS_DATA, LAWSUITS_DATA, RESOURCES_DATA } from './constants';
import type { Policy, Tip, Lawsuit, Resource } from './types';
import { BookOpenIcon, QuestionMarkCircleIcon, ExclamationTriangleIcon, MapPinIcon } from './components/Icons';
import { ResourceType } from './types';

type Page = 'home' | 'rights' | 'resources' | 'handbooks' | 'toolkit' | 'assistant' | 'stories';

const StateSpecificInfo: React.FC = () => {
    const { selectedState, statesMap } = useStateContext();
    if (selectedState === 'all') {
        return null;
    }

    const stateName = statesMap[selectedState];
    const stateResources = RESOURCES_DATA.filter(r => r.state === selectedState && r.type === ResourceType.Legal);
    const stateLawsuits = LAWSUITS_DATA.filter(l => l.state === selectedState);

    return (
        <section id="state-info" className="my-16 p-8 bg-blue-50 rounded-lg border border-blue-200">
            <h2 className="text-3xl font-bold text-blue-800 mb-6 flex items-center justify-center">
                <MapPinIcon className="w-8 h-8 mr-3 text-blue-600" />
                Information for {stateName}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Legal Resources in {stateName}</h3>
                    {stateResources.length > 0 ? (
                        <div className="space-y-4">
                            {stateResources.map(resource => (
                                <div key={resource.id} className="bg-white p-4 rounded-md shadow-sm border">
                                    <p className="font-bold">{resource.name}</p>
                                    <p className="text-sm text-slate-600">{resource.description}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-slate-600">No specific legal resources found for {stateName} in our directory.</p>
                    )}
                </div>
                 <div>
                    <h3 className="text-xl font-semibold text-slate-800 mb-4">Relevant Lawsuits</h3>
                    {stateLawsuits.length > 0 ? (
                        <div className="space-y-4">
                            {stateLawsuits.map(lawsuit => (
                                <div key={lawsuit.id} className="bg-white p-4 rounded-md shadow-sm border">
                                    <p className="font-bold">{lawsuit.title}</p>
                                    <p className="text-sm text-slate-600">{lawsuit.summary}</p>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-slate-600">No specific lawsuits listed for {stateName}.</p>
                    )}
                </div>
            </div>
        </section>
    );
};


const HomePage: React.FC = () => {
    return (
        <>
            <section id="hero" className="text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
                    Navigating DCS with Confidence
                </h1>
                <p className="max-w-3xl mx-auto text-lg text-slate-700">
                    Empowering families with knowledge. Select your state from the top menu to find local resources.
                </p>
            </section>

            <StateSpecificInfo />

            <section id="policies" className="mb-16">
                <h2 className="text-3xl font-bold text-blue-800 mb-8 flex items-center justify-center">
                    <BookOpenIcon className="w-8 h-8 mr-3 text-blue-600" />
                    Key DCS Policies
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {POLICIES_DATA.map((policy: Policy) => (
                        <Card key={policy.id} title={policy.title} Icon={policy.icon}>
                            <p className="text-slate-600">{policy.summary}</p>
                        </Card>
                    ))}
                </div>
            </section>

            <section id="tips" className="mb-16">
                <h2 className="text-3xl font-bold text-green-800 mb-8 flex items-center justify-center">
                    <QuestionMarkCircleIcon className="w-8 h-8 mr-3 text-green-600" />
                    How to Challenge DCS
                </h2>
                <div className="max-w-4xl mx-auto space-y-4">
                    {TIPS_DATA.map((tip: Tip, index: number) => (
                        <Accordion key={tip.id} title={tip.question} defaultOpen={index === 0} accentColor="green">
                            <p className="text-slate-600">{tip.answer}</p>
                        </Accordion>
                    ))}
                </div>
            </section>
            
            <section id="lawsuits">
                <h2 className="text-3xl font-bold text-amber-800 mb-8 flex items-center justify-center">
                    <ExclamationTriangleIcon className="w-8 h-8 mr-3 text-amber-600" />
                    Current Lawsuits & Legal Actions
                </h2>
                <div className="space-y-6">
                    {LAWSUITS_DATA.map((lawsuit: Lawsuit) => (
                    <div key={lawsuit.id} className="bg-white p-6 rounded-lg shadow-md border border-slate-200 hover:shadow-lg transition-shadow duration-300 border-l-4 border-amber-300">
                        <div className="flex justify-between items-center">
                            <h3 className="text-xl font-semibold text-slate-800 mb-2">{lawsuit.title}</h3>
                            <span className="text-sm font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">{lawsuit.state}</span>
                        </div>
                        <p className="text-slate-600 mb-4">{lawsuit.summary}</p>
                        <a 
                            href={lawsuit.sourceUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 font-medium hover:underline transition-colors duration-200"
                        >
                            Read More at {lawsuit.sourceName} &rarr;
                        </a>
                    </div>
                    ))}
                </div>
            </section>
        </>
    );
};


const AppContent: React.FC = () => {
  const [page, setPage] = useState<Page>('home');

  const renderPage = () => {
    switch(page) {
      case 'home':
        return <HomePage />;
      case 'rights':
        return <KnowYourRightsPage />;
      case 'resources':
        return <ResourceDirectoryPage />;
      case 'handbooks':
        return <HandbooksPage />;
      case 'toolkit':
        return <ToolkitPage />;
      case 'assistant':
        return <AssistantPage />;
      case 'stories':
        return <StoriesPage />;
      default:
        return <HomePage />;
    }
  }

  return (
    <div className="min-h-screen font-sans text-slate-800">
      <Header onNavigate={(p: string) => setPage(p as Page)} currentPage={page} />
      <main className="container mx-auto px-4 py-8 md:py-12">
        {renderPage()}
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
};

const App: React.FC = () => {
    return (
        <StateProvider>
            <AppContent />
        </StateProvider>
    )
}

export default App;
