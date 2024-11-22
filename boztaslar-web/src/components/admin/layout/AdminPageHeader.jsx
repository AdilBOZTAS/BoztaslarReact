export default function AdminPageHeader({ title, description, actions }) {
    return (
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            {description && (
              <p className="mt-1 text-sm text-gray-500">{description}</p>
            )}
          </div>
          {actions && <div className="flex space-x-3">{actions}</div>}
        </div>
      </div>
    );
  }