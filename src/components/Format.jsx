import React from 'react';
import { useTranslation } from 'react-i18next';
import DotGrid from './DotGrid.jsx';

const Format = () => {
    const { t } = useTranslation();

    return (
        <div className="container py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="col-lg-6">
                    <h2 className="text-uppercase text-secondary fw-bold mb-4 text-dark-emphasis">
                        {t('formatTitle')}
                    </h2>
                </div>
                <div className="col-lg-4 d-flex justify-content-center pe-4">
                    <DotGrid />
                </div>
            </div>


            <div className="row g-4">
                {/* Left Column: Format Table */}
                <div className="col-lg-6">
                    <div className="h-100 p-4 rounded-5 bg-light">
                        <h3 className="fs-3 fw-bold mb-3 text-secondary">{t('formatSectionTitle')}</h3>

                        <div className="bg-white rounded-3 overflow-hidden border border-secondary border-opacity-25">
                            <div className="table-responsive">
                                <table className="table table-bordered mb-0 border-secondary border-opacity-25">
                                    <thead>
                                        <tr className='fs-5'>
                                            <th className=" py-2 px-3 text-uppercase small fw-bold text-secondary w-50">{t('programHeader')}</th>
                                            <th className="py-2 px-3 text-uppercase small fw-bold text-secondary text-center">{t('durationHeader')}</th>
                                            <th className="py-2 px-3 text-uppercase small fw-bold text-secondary text-center">{t('groupHeader')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* Row 1 */}
                                        <tr className='fs-5'>
                                            <td className="p-3">
                                                <div className="fw-bold text-uppercase small mb-1">{t('row1Title')}</div>
                                                <div className="small text-muted">{t('row1Subtitle')}</div>
                                            </td>
                                            <td className="p-3 text-center align-middle text-nowrap">{t('row1Duration')}</td>
                                            <td className="p-3 text-center align-middle small">{t('row1Group')}</td>
                                        </tr>
                                        {/* Row 2 */}
                                        <tr className='fs-5'>
                                            <td className="p-3">
                                                <div className="fw-bold text-uppercase small mb-1">{t('row2Title')}</div>
                                                <div className="small text-muted">{t('row2Subtitle')}</div>
                                            </td>
                                            <td className="p-3 text-center align-middle text-nowrap">{t('row2Duration')}</td>
                                            <td className="p-3 text-center align-middle small">{t('row2Group')}</td>
                                        </tr>
                                        {/* Row 3 */}
                                        <tr className='fs-5'>
                                            <td className="p-3">
                                                <div className="fw-bold text-uppercase small mb-1">{t('row3Title')}</div>
                                                <div className="small text-muted">{t('row3Subtitle1')}</div>
                                                <div className="small text-muted">{t('row3Subtitle2')}</div>
                                            </td>
                                            <td className="p-3 text-center align-middle">
                                                <div className="text-nowrap">{t('row3Duration')}</div>
                                                <div className="text-nowrap">{t('row3Duration')}</div>
                                            </td>
                                            <td className="p-3 text-center align-middle small">{t('row3Group')}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="mt-3 small fs-6 text-muted">
                            {t('formatFooter')}
                        </div>
                    </div>
                </div>

                {/* Right Column: Cost Details */}
                <div className="col-lg-6">
                    <div className="h-100 p-4 rounded-5 bg-light">
                        <div className="mb-5">
                            <h3 className="fw-bold mb-3 fs-3 text-secondary">{t('costAffectsTitle')}</h3>
                            <ul className="list-unstyled mb-0 d-flex fs-4 flex-column gap-1">
                                <li className="d-flex align-items-start text-muted">
                                    <span className="me-2">•</span> {t('costAffects1')}
                                </li>
                                <li className="d-flex align-items-start text-muted">
                                    <span className="me-2">•</span> {t('costAffects2')}
                                </li>
                                <li className="d-flex align-items-start text-muted">
                                    <span className="me-2">•</span> {t('costAffects3')}
                                </li>
                                <li className="d-flex align-items-start text-muted">
                                    <span className="me-2">•</span> {t('costAffects4')}
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="fw-bold mb-3 fs-3 text-secondary">{t('costIncludesTitle')}</h3>
                            <ul className="list-unstyled mb-0 fs-4 d-flex flex-column gap-1">
                                <li className="d-flex align-items-start text-muted">
                                    <span className="me-2">•</span> {t('costIncludes1')}
                                </li>
                                <li className="d-flex align-items-start text-muted">
                                    <span className="me-2">•</span> {t('costIncludes2')}
                                </li>
                                <li className="d-flex align-items-start text-muted">
                                    <span className="me-2">•</span> {t('costIncludes3')}
                                </li>
                                <li className="d-flex align-items-start text-muted">
                                    <span className="me-2">•</span> {t('costIncludes4')}
                                </li>
                                <li className="d-flex align-items-start text-muted">
                                    <span className="me-2">•</span> {t('costIncludes5')}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Format;
