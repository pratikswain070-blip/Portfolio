import React from 'react';

const Certificates = () => {
  return (
    <section className="py-section-gap" id="certificates">
      <div className="mb-16">
        <span className="font-label-mono text-label-mono text-secondary block mb-2">// CREDENTIALS</span>
        <h2 className="font-headline-lg text-headline-lg">Certificates</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        
        {/* Certificate 1 */}
        <div className="w-full group cursor-pointer flex flex-col h-full">
          <div className="overflow-hidden border border-outline-variant flex-shrink-0">
            <div className="bg-surface-container-high relative">
              <img 
                alt="Certificate 1" 
                className="w-full h-auto block group-hover:scale-105 transition-transform duration-700" 
                src="/cert1.jpg" 
              />
            </div>
          </div>
        </div>

        {/* Certificate 2 */}
        <div className="w-full group cursor-pointer flex flex-col h-full">
          <div className="overflow-hidden border border-outline-variant flex-shrink-0">
            <div className="bg-surface-container-high relative">
              <img 
                alt="Certificate 2" 
                className="w-full h-auto block group-hover:scale-105 transition-transform duration-700" 
                src="/cert2.jpg" 
              />
            </div>
          </div>
        </div>

        {/* Certificate 3 */}
        <div className="w-full group cursor-pointer flex flex-col h-full">
          <div className="overflow-hidden border border-outline-variant flex-shrink-0">
            <div className="bg-surface-container-high relative">
              <img 
                alt="Certificate 3" 
                className="w-full h-auto block group-hover:scale-105 transition-transform duration-700" 
                src="/cert3.jpg" 
              />
            </div>
          </div>
        </div>

        {/* Certificate 4 */}
        <div className="w-full group cursor-pointer flex flex-col h-full">
          <div className="overflow-hidden border border-outline-variant flex-shrink-0">
            <div className="bg-surface-container-high relative">
              <img 
                alt="Certificate 4" 
                className="w-full h-auto block group-hover:scale-105 transition-transform duration-700" 
                src="/cert4.png" 
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certificates;
