import React from 'react';
import { Inbox } from 'lucide-react';
import './States.css';

/**
 * EmptyState Component
 * Displays helpful zero-state visual feedback when lists or queues are empty.
 */
export default function EmptyState({
  title = 'No Records Found',
  description = 'There are currently no items or active queue tokens to display.',
  icon: Icon = Inbox,
  actionLabel,
  onAction
}) {
  return (
    <div className="state-container" role="region" aria-label={title}>
      <div className="state-icon-wrap state-empty-icon" aria-hidden="true">
        <Icon size={26} />
      </div>
      <h3 className="state-title">{title}</h3>
      <p className="state-description">{description}</p>
      {actionLabel && onAction && (
        <div className="state-actions">
          <button type="button" className="btn btn-secondary btn-sm" onClick={onAction}>
            {actionLabel}
          </button>
        </div>
      )}
    </div>
  );
}
